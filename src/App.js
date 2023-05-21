import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
<div>
  <Header />
  <div className="container">
      <div className="box">
          <div className="chose">
              <div className="head">
                    <div className="head-l">
                    <div className="sec0">
                          <input type="text" required/>
                        <label>Title</label>
                    </div>
                      <div className="sec1">
                        <input type="number" required/>
                          <label>Price</label>
                          </div>
                        <div className="sec2">
                          <input type="text" required/>
                        <label>Address</label>
                    </div>
                    <div className="sec3">
                      <input type="text" required/>
                      <label>Phone Number</label>                      
                    </div>
                    <div className="sec4">
                      <form action="/upload" method="post" enctype="multipart/form-data">
                        <label for="file-upload" className="custom-file-upload">
                          <i className="fa-solid fa-camera fa-l"></i>
                          <input id="file-upload" type="file" name="images" accept="image/*" multiple />
                        </label>
                      </form>
                    </div>
                      <div className="secv">
                        <form action="/action_page.php">
                          <input type="file" id="myFile" name="filename"/>
                          <i className="fas fa-regular fa-video"></i>
                        </form>                        
                      </div>
                      </div>
                          <div className="head-R">
                            <div className="sec1">
                                    <label for="property-status">Property Status</label>
                                      <select name="property-status" id="property-status">
                                          <option value="for-rent">For Rent</option>
                                          <option value="for-sale">For Sale</option>
                                      </select>
                        </div>
                      <div className="sec2">
                          <label for="location">Location</label>
                              <select name="location" id="location">
                                <option value="Cairo">Cairo</option>
                                <option value="Giza">Giza</option>
                                <option value="Alex">Alex</option>
                                <option value="Luxor">Luxor</option>
                              </select>
                        </div>
                      <div className="sec3">
                              <label for="Property-Type">Property Type</label>
                                <select name="Property-Type" id="Property-Type">
                                  <option value="Office">Office</option>
                                  <option value="Shop">Shop</option>
                                  <option value="Apartment">Apartment</option>
                              </select>
                      </div>
                </div>
              </div>
              <div className="center">
                <div>
                  <div><i className=" fas fa-thin fa-bed"></i><span><input type="number" placeholder="Bedrooms"/></span></div>
                  
                </div>
                <div>
                  <div><i className="fas fa-shower"></i><span><input type="number" placeholder="BathRooms"/></span></div>

                </div>
                <div>
                  <div>
                    <i className="fas fa-light fa-ruler-combined"></i><span><input type="number" placeholder="Area "/></span>
                  </div>
                </div>
              </div>
              <div className='des'>
              <textarea id="description" name="description" placeholder='Type Detailes...'></textarea>
                </div>   
              <div className="btn">
                <button type="submit">Submit</button>
              </div>     
          </div>
      </div>
  </div>
  <Footer />
</div>
  );
}

export default App;
