/**
 * Google Analytics helper functions
 */

// Track section view with timing
export const trackSectionView = (sectionName) => {
  if (!window.gtag) return;
  
  // Track section view as a page view
  window.gtag('event', 'page_view', {
    page_title: `${sectionName} Section`,
    page_location: `${window.location.origin}/#${sectionName.toLowerCase().replace(/\s+/g, '-')}`,
  });
  
  // Start timing for section duration
  window.gtag('event', 'section_enter', {
    'event_category': 'Section Interaction',
    'event_label': sectionName,
    'value': Date.now() // Store timestamp for duration calculation
  });
};

// Track section exit with duration calculation
export const trackSectionExit = (sectionName, entryTimestamp) => {
  if (!window.gtag) return;
  
  const duration = Math.round((Date.now() - entryTimestamp) / 1000); // duration in seconds
  
  window.gtag('event', 'section_exit', {
    'event_category': 'Section Interaction',
    'event_label': sectionName,
    'value': duration,
    'metric_id': 'duration_seconds', // Custom metric
    'metric_value': duration
  });
};

// Track total time spent on each section
export const trackSectionMetrics = (sectionMetrics) => {
  if (!window.gtag) return;
  
  Object.keys(sectionMetrics).forEach(section => {
    const { totalTime, visits } = sectionMetrics[section];
    
    if (visits > 0) {
      window.gtag('event', 'section_engagement', {
        'event_category': 'Section Analytics',
        'event_label': section,
        'total_time': totalTime,
        'visits': visits,
        'avg_time': Math.round(totalTime / visits)
      });
    }
  });
}; 