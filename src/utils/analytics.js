const analyticsTracking = (eventName) => {
  if (typeof windowd !== "undefined") {
    window.ga("send", "event", "social", "click", eventName, {
      nonInteraction: true,
    });
  }
};

export default analyticsTracking;
