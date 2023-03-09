import "./App.scss";
import { useState } from "react";
import firebaseDB from './firebase'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [data, setData] = useState({
  name:'',
  email:'',
  subject:'',
  message:''
});

const {name,email,subject,message} = data;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!name || !email || !subject || !message){
      toast.error("Please fill all the input fields")
    }
    else{
      firebaseDB.child("contacts").push(data);
      setData({name: '', email: '', subject: '', message: ''});
      toast.success("Form Submitted Successfully!")
    }
  };
  const inputHandler = (e) => {
    let {name,value}= e.target;
    setData({...data, [name]:value })
  };

  return (
    <section className="contact-section">
      <div className="container ms-6">
        <ToastContainer position="top-left"/>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={onSubmitHandler}
                    >
                      <div className="row">
                        <div className="col-md-12 ms-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              className="form-control"
                              onChange={inputHandler}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 ms-6 mt-2">
                          <div className="form-group">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                              onChange={inputHandler}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 ms-6 mt-2">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Feedback"
                              className="form-control"
                              onChange={inputHandler}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 ms-6 mt-2">
                          <div className="form-group">
                            <textarea
                              type="text"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="4"
                              className="form-control"
                              onChange={inputHandler}
                              value={message}
                            />
                          </div>
                        </div>
                        <div className=" col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value=" Send Message"
                              className="btn btn-primary"
                              
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="col-md-6 d-flex align-items-stretch ">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact Us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span> Address : </span> Delhi
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span> Phone: </span>
                          <a href="tel://91983465877">+910000000 </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span> Email: </span>
                          <a href="mailto:info@yoursite.com">
                            random@site.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span> Website : </span>
                          <a href="/"> randomsite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
