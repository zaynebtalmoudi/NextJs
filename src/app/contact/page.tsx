

export default function Contact  () {
  return (
     <section className="container relative max-w-4xl mx-auto min-h-screen flex-center px-5 pt-20">
      <div className="pb-10">
        <div className="text-center">
          <h3>Contact Me</h3>
        
        </div>
        <div
          className="mt-12 md:relative flex flex-col gap-5 sm:max-w-full mx-auto max-w-xs"
        >
          <div
            className="dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 py-14 px-7 w-full"
          >
            <h3 className="font-semibold text-3xl">
              Send Us A <br /><span className="text-primary">Message</span>
            </h3>
            <form className="*:flex *:flex-col *:gap-1 mt-5 md:w-2/3 w-full">
              <div className="">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="">
                <label htmlFor="msg">Message</label>
                <textarea id="msg" placeholder="Enter your message"></textarea>
              </div>
              <button className="btn btn-filled ml-auto">Send to Us</button>
            </form>
          </div>
        
        </div>
      </div>
    </section>
  )
}

