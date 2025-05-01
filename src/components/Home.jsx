import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/main');
  };
  return (
    <div className="home-container" >
      <div className="form-content">
        <form onSubmit={handleSubmit}>
        <div>
          <h4>1. What is your name?</h4>
          <input type="text" placeholder="Name" required />
        </div>
        <div>
          <h4>2. What's your age?</h4>
          <input type="number" min="15" max="100" placeholder="Enter your age" required />
        </div>
        <div>
          <h4>3. What is the main thing you want to achieve with this site?</h4>
          <input placeholder="Write your answer" type="text" required/>
        </div>
        <div>
          <h4>4. How do you usually organize your task?</h4>
          <input placeholder="Write here" type="text" required/>
        </div>
        <div>
          <h4>5. How are you planning to use this site?</h4>
          <input type="text" placeholder="Write here"   required/>
        </div>
        <div>
          <h4>6. Do you prefer setting daily goals, weekly goals, or flexible plans?</h4>
          <input type="radio" id="yes" name="agree" value="yes" required />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agree" value="no" required />
          <label htmlFor="no">No</label>
        </div>
        <div>
            <h4>
            7.Would you like to integrate with your Google Calendar
            </h4>
            <input type="radio" id="yes" name="agree" value="yes" required />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agree" value="no" required/>
          <label htmlFor="no">No</label>
        </div>
        <div style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button>Start Now</button>
        </div>
        <div>
            
        </div>
        </form>
        
       
      </div>
      
    </div>
  );
}

export default Home;
