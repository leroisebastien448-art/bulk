module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(`
window.EMAILJS_PUBLIC_KEY  = "${process.env.EMAILJS_PUBLIC_KEY  || ''}";
window.EMAILJS_SERVICE_ID  = "${process.env.EMAILJS_SERVICE_ID  || ''}";
window.EMAILJS_TEMPLATE_ID = "${process.env.EMAILJS_TEMPLATE_ID || ''}";
  `);
};
