
import './App.css';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function App() {
  const data=[{
    type:"FREE",
    price:"$0",
    users:"Single User",
    storage:"5GB Storage",
    private:<ClearIcon color='error' fontSize="large"/>,
    monthstatus:<ClearIcon color='error' fontSize="large"/>,
    privatei:"disabled",
    monthstatusi:"disabled",
   
  },
  {
    type:"PLUS",
    price:"$9",
    users:"5 Users",
    storage:"50GB Storage",
    private:<CheckIcon color='success' fontSize="large"/>,
    monthstatus:<ClearIcon color='error' fontSize="large"/>,
    privatei:"",
    monthstatusi:"disabled",
   
  },
  {
    type:"PRO",
    price:"$49",
    users:"Unlimited Users",
    storage:"150GB Storage",
    private:<CheckIcon color='success' fontSize="large"/> ,
    monthstatus:<CheckIcon color='success' fontSize="large"/>,
    privatei:"",
    monthstatusi:"",
    
  }
];
  
  return (
      
  <div class="container">
    
      {data.map((nm)=>(
      <Pricecard Type={nm.type} Price={nm.price} Users={nm.users} Storage={nm.storage} Private={nm.private} Monthstatus={nm.monthstatus} Privatei={nm.privatei}  Monthstatusi={nm.monthstatusi} />
      ))}
      </div>
     
     
     
  );
}
function Pricecard({Type,Price,Users,Storage,Private,Monthstatus,Privatei,Monthstatusi,Freedom}){
  return(
    
    <Card className="Priceing">
        
            <h5 className="card-title">{Type}</h5>
            <h6 className="card-price">{Price}<span class="period">/month</span></h6>
            <hr />
            <div className='list'>
            <ul>
              <li>
                <CheckIcon color='success' fontSize="large"/>{Users}
              </li>
              <li>
                <CheckIcon color='success' fontSize="large"/>{Storage}
              </li>
              <li>
                <CheckIcon color='success' fontSize="large"/>Unlimited Public Projects
              </li>
              <li>
                <CheckIcon color='success' fontSize="large"/>Community Access
              </li>
              <li className={Privatei}>{Private}Unlimited Private Projects</li>
              <li className={Privatei}>{Private}Dedicated Phone Support</li>
              <li className={Privatei}>{Private}{Monthstatusi===""?"Unlimited ":""}Free Subdomain</li>
              <li className={Monthstatusi}>{Monthstatus} Monthly Status Reports</li>
            </ul>
            </div>
            <div className='butt'>
              <Button className='but' variant="contained">Button</Button>
            </div>
          
      </Card>
      
  );
}

export default App;
