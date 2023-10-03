

const ComposeNewsletter = () => {
  return (
    <div>
      composeNewsletter
      <h1>Compose Newsletter</h1>
    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required/>

    <label htmlFor="newsletterContent">Newsletter Content (HTML):</label>
    <textarea id="newsletterContent" name="newsletterContent" required></textarea>

    <input type="submit" value="Send Newsletter"/>

    </div>
  )
}

export default ComposeNewsletter
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Compose Newsletter</title>
// </head>
// <body>
//   <h1>Compose Newsletter</h1>
  // <form action="/send-newsletter" method="POST">
  //   <label for="subject">Subject:</label>
  //   <input type="text" id="subject" name="subject" required><br><br>

  //   <!-- Add a textarea for the HTML content of your newsletter -->
  //   <label for="newsletterContent">Newsletter Content (HTML):</label>
  //   <textarea id="newsletterContent" name="newsletterContent" required></textarea><br><br>

  //   <input type="submit" value="Send Newsletter">
  // </form>
// </body>
// </html>