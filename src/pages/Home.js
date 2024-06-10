import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import plusgold from '../assets/Images/plusgold.png';
import auggold from '../assets/Images/auggold.png';
import cashfree from '../assets/Images/cashfree.png';
import npci from '../assets/Images/npci.png';
import walliwood from '../assets/Images/walliwood.png';
import familygroup from '../assets/Images/familygroup.png';
import appwork from '../assets/Images/appwork.png';
import chakra from '../assets/Images/chakra.png';
import thumb from '../assets/Images/thumb.png';
import fish from '../assets/Images/fish.png';
import fgroup from '../assets/Images/fgroup.png';
import kalash from '../assets/Images/kalash.png';
import kangan from '../assets/Images/kangan.png';
import coin from '../assets/Images/coin.png';
import deepak from '../assets/Images/deepak.png';
import media from '../assets/Images/media.png';
import vccircle from '../assets/Images/vccircle.png'
import forbes from '../assets/Images/forbes.png'
import yourstory from '../assets/Images/yourstory.png'
import google from '../assets/Images/google.png'
import app from '../assets/Images/google.png'
import mobile from '../assets/Images/mobile.png'
import augment1 from '../assets/Images/augment1.png'
import bis from '../assets/Images/bis.png'
import cashfree1 from '../assets/Images/cashfree1.png'
import banksafe from '../assets/Images/banksafe.png'
import jia from '../assets/Images/jia.png'

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement, 
    PointElement,  
    LineController,
    Title,
    Tooltip,
    Legend
);

const Home = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("1W");
    const data = {
        labels: ['12 APR', '13 APR', '14 APR', '15 APR', '16 APR', '17 APR', '18 APR'],
        datasets: [
            {
                label: 'Gold Price',
                data: [7445, 7600, 7350, 7500, 7700, 7600, 7800],
                borderColor: 'gold',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category', // Use 'category' scale for the x-axis
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Price (£)',
                },
            },
        },
    };

    const handleTimeframeChange = (timeframe) => {
        setSelectedTimeframe(timeframe);
    };

    return ( 
        <>

            <Row justify="center" align="middle" style={{ padding: '20px 0' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img src={plusgold} alt="plusgold" style={{ maxWidth: '100%' }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
                        <div>
                            start saving
                        </div>
                        <div>
                            Gold Rush Festival 
                        </div>
                        <div>
                            Partner with us 
                        </div>
                        <div>
                            <Button style={{ backgroundColor: 'red', color: 'white' }}>Download App</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row justify="center" align="middle" style={{ padding: '20px 0' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <p>Save Smartly in</p>
                    <h1 style={{ color: 'yellow' }}>Gold</h1>
                    <p>And get 10% extra gold every year!</p>
                    <Row gutter={[16, 16]} justify="center" style={{ marginBottom: '20px' }}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                            <Button style={{ backgroundColor: 'red', color: 'white' }}>Start Saving Now</Button>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                            Trusted by 2Lakh+ Indians
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ textAlign: 'center' }}>
                            Powered by
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ textAlign: 'center' }}>
                            <img src={auggold} alt="auggold" style={{ maxWidth: '80%' }} />
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ textAlign: 'center' }}>
                            <img src={cashfree} alt="cashfree" style={{ maxWidth: '80%' }} />
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ textAlign: 'center' }}>
                            <img src={npci} alt="npci" style={{ maxWidth: '80%' }} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={walliwood} alt="walliwood" style={{ maxWidth: '100%' }} />
                </Col>
            </Row>

            <Row 
                style={{ 
                    border: '1px solid black', 
                    width: '80%', 
                    borderRadius: '1%', 
                    marginLeft: '10%',
                    padding: '20px', 
                    boxSizing: 'border-box'
                }} 
                justify="center"
                align="middle"
            >
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img src={familygroup} alt="familygroup" style={{ width: '40%' }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <h1>Save like your mom</h1>
                    <p>Buy 10gm <span style={{ color: 'yellow' }}>gold</span> & get 1gm <span style={{ color: 'yellow' }}>Gold</span> Extra</p>
                    <p>
                        Buy Gold through daily, weekly, or monthly SIPs, or through One-Time payments - 
                        & get 10% extra Gold from Plus's partner jewellers
                    </p>
                </Col>
            </Row>

            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>How does the app work</h1>
                <p>Watch our short videos to learn more about our app</p>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                        <img src={appwork} alt="appwork" style={{ width: '90%' }} />
                        <h1>What is Plus Gold?</h1>
                        <p>Built on Augmont</p>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                        <img src={appwork} alt="appwork" style={{ width: '90%' }} />
                        <h1>How to Save on Plus?</h1>
                        <p>SIP or One-time</p>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                        <img src={appwork} alt="appwork" style={{ width: '90%' }} />
                        <h1>How to Redeem?</h1>
                        <p>Cash, gold or Jewellery</p>
                    </Col>
                </Row>
            </div>

            <Row gutter={[16, 16]} justify="space-around">
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col span={12}>
                            <img src={chakra} alt="chakra" style={{ width: '50%' }} />
                        </Col>
                        <Col span={12}>
                            <p>No Lock-in on Plus Gold</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col span={12}>
                            <img src={chakra} alt="chakra" style={{ width: '50%' }} />
                        </Col>
                        <Col span={12}>
                            <p>Easy Withdrawal</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col span={12}>
                            <img src={chakra} alt="chakra" style={{ width: '50%' }} />
                        </Col>
                        <Col span={12}>
                            <p>Fixed Extra Gold p.a.</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <Row align="middle" gutter={[8, 8]}>
                        <Col span={12}>
                            <img src={chakra} alt="chakra" style={{ width: '50%' }} />
                        </Col>
                        <Col span={12}>
                            <p>Bonus benefits from Jeweller</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ backgroundColor: 'teal', padding: '20px 0' }} justify="space-around" align="middle">
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={thumb} alt="thumb" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                    <p>PlusGold appearance in</p>
                    <h1>SHARK TANK <span style={{ backgroundColor: 'yellow'}}>INDIA</span></h1>
                    <p>Watch our Shark Tank pitch</p>
                    <img src={fish} alt="fish" style={{ maxWidth: '100%', marginTop: '20px' }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={fgroup} alt="fgroup" style={{ maxWidth: '100%' }} />
                </Col>
            </Row>

            <h1>Save for life goals</h1> 
            <p>Save in Plus Gold for life events that matters</p>
            
            <Row>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                    <p>Wedding</p>
                    <img src={kalash} alt="kalash" />
                    <p>$ 150 / Day</p>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                    <p>Dream</p>
                    <p>Anniversary</p>
                    <img src={kangan} alt="kangan" />
                    <p>$ 100 / Day</p>
                    <Button style={{ backgroundColor: 'red', color: 'white'}}>Starting saving Now</Button>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                    <p>coin</p>
                    <img src={coin} alt="coin" />
                    <img src={deepak} alt="deepak" />
                    <p>$ 200 / Day</p>
                    
                </Col>  
            </Row>

            <div className="gold-price-graph">
                <div className="header">
                    <h2>Historical Gold Price</h2>
                    <div className="performance">
                    <span className="performance-value">+23.43%</span>
                    <span className="performance-label">1 WEEK PERFORMANCE</span>
                    </div>
                </div>
                <Line data={data} options={options} />
                <div className="timeframe-buttons">
                    <button>1W</button>
                    <button>1M</button>
                    <button>6M</button>
                    <button>1Y</button>
                    <button>3M</button>
                    <button>Max</button>
                </div>
            </div>

            <Row>
                <div style={{ textAlign: 'center', marginLeft: '40%' }}>
                    <h1>Trusted by the best Jewellers</h1>
                    <p>Redeem your savings at more than 1000 stores across 520+ cities</p>
                </div>
                <div style={{width:'100%'}}>
                    <Row>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border" >
                            <img  className="imageStyle" src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                        <Col xs={24} sm={24} md={2} lg={2} xl={2} className="circular-border">
                            <img src={jia} />
                        </Col>
                    </Row>
                </div>    
            </Row>

            <Row justify="center" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Col xs={24}>
                    <h1>The media loves Plus</h1>
                    <p>Top publications & news media talks about us</p>
                </Col>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <img src={media} alt="media" style={{ width: '100%', marginBottom: '10px' }} />
                        <p>PlusGold Is Unlocking the Potential of Gold Investment....</p>
                        <img src={vccircle} alt="vccircle" style={{ width: '50%' }} />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <img src={media} alt="media" style={{ width: '100%', marginBottom: '10px' }} />
                        <p>PlusGold Is Unlocking the Potential of Gold Investment....</p>
                        <img src={forbes} alt="forbes" style={{ width: '50%' }} />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <img src={media} alt="media" style={{ width: '100%', marginBottom: '10px' }} />
                        <p>PlusGold Is Unlocking the Potential of Gold Investment....</p>
                        <img src={yourstory} alt="yourstory" style={{ width: '50%' }} />
                    </Col>
                </Row>
            </Row>

            <Row justify="center" align="middle" style={{ padding: '20px 0' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <h1>Download the App</h1>
                    <p>
                        Plus, a revolutionary app that helps Indian homemakers to pre-plan 
                        their jewellery purchase by saving monthly & gaining 10% IRR
                    </p>
                    <Row justify="center" gutter={[16, 16]}>
                        <Col>
                            <img src={google} alt="Google Play" style={{ maxWidth: '100%', margin: '10px' }} />
                        </Col>
                        <Col>
                            <img src={app} alt="App Store" style={{ maxWidth: '100%', margin: '10px' }} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={mobile} alt="Mobile App" style={{ width: '70%' }} />
                </Col>
            </Row>

            <Row justify="center" align="middle" style={{ padding: '20px 0' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <h1>Your money is 100% Secured!</h1>
                    <p>Your asset is stored in secured vaults at Augmont and available to withdraw anytime</p>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                            <img src={augment1} alt="Gold Partner" style={{ width: '80%', marginBottom: '10px' }} />
                            <p>Gold Partner</p>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                            <img src={bis} alt="Payment Partner" style={{ width: '80%', marginBottom: '10px' }} />
                            <p>Payment Partner</p>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} style={{ textAlign: 'center' }}>
                            <img src={cashfree1} alt="Gold Partner" style={{ width: '80%', marginBottom: '10px' }} />
                            <p>Gold Partner</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={banksafe} alt="Bank Safe" style={{ width: '70%' }} />
                </Col>
            </Row>

            <Row justify="center" style={{ textAlign: 'center', padding: '20px 0' }}>
                <Col span={24}>
                    <p>© FinShakti Solutions Pvt. Ltd.</p>
                </Col>
                <Row className="root" style={{ width: '100%', justifyContent: 'space-around' }}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={google} alt="Google Play" style={{ maxWidth: '100%' }} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={app} alt="App Store" style={{ maxWidth: '100%' }} />
                    </Col>
                </Row>
            </Row>
            
        </>
    );
}

export default Home;




