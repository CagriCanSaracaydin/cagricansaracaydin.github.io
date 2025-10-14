import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

/**
 * Web Vitals Monitoring
 * 
 * Tracks Core Web Vitals and sends them to analytics
 * - CLS: Cumulative Layout Shift
 * - FID: First Input Delay  
 * - FCP: First Contentful Paint
 * - LCP: Largest Contentful Paint
 * - TTFB: Time to First Byte
 */

function sendToAnalytics(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', metric);
  }

  // Send to your analytics endpoint
  // Example: Google Analytics 4
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: getMetricRating(metric),
    });
  }

  // Example: Custom analytics endpoint
  if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
    fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: getMetricRating(metric),
        id: metric.id,
        timestamp: Date.now(),
        url: window.location.href,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
    }).catch(console.error);
  }
}

/**
 * Get rating for a metric based on Web Vitals thresholds
 */
function getMetricRating(metric) {
  const thresholds = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FID: { good: 100, needsImprovement: 300 },
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    TTFB: { good: 800, needsImprovement: 1800 },
  };

  const threshold = thresholds[metric.name];
  if (!threshold) return 'unknown';

  if (metric.value <= threshold.good) return 'good';
  if (metric.value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Initialize Web Vitals monitoring
 */
export function initWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);

  // Log initialization in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 Web Vitals monitoring initialized');
  }
}

/**
 * Report custom performance metrics
 */
export function reportCustomMetric(name, value, metadata = {}) {
  const metric = {
    name: `custom_${name}`,
    value,
    id: `${name}_${Date.now()}`,
    delta: value,
    ...metadata,
  };

  sendToAnalytics(metric);
}

/**
 * Measure component render time
 */
export function measureComponentRender(componentName, callback) {
  const startTime = performance.now();
  
  const result = callback();
  
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  reportCustomMetric('component_render', duration, {
    component: componentName,
  });
  
  return result;
}

/**
 * Monitor resource loading
 */
export function monitorResourceLoading() {
  if (!window.PerformanceObserver) return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.initiatorType === 'img' && entry.duration > 1000) {
        console.warn(`⚠️ Slow image load: ${entry.name} (${Math.round(entry.duration)}ms)`);
      }
    }
  });

  observer.observe({ entryTypes: ['resource'] });
}

/**
 * Create performance mark
 */
export function createPerformanceMark(name) {
  if (performance.mark) {
    performance.mark(name);
  }
}

/**
 * Measure performance between two marks
 */
export function measurePerformance(measureName, startMark, endMark) {
  if (performance.measure) {
    try {
      performance.measure(measureName, startMark, endMark);
      const measure = performance.getEntriesByName(measureName)[0];
      
      if (measure) {
        reportCustomMetric('performance_measure', measure.duration, {
          measure: measureName,
        });
        
        return measure.duration;
      }
    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }
}

export default initWebVitals;
