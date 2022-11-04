import React, { useState } from "react";
import logo from "./giftbox.png";
import "./App.css";

function App() {

  const today  = new Date()

  const [modal, setModal] = useState(false);
  const [x, setx] = useState(false);
  const [btc, setBtc] = useState(0)

  const lucky = () => {
    const luck = Math.floor(Math.random() * 3)
    if(luck === 0) {
      setBtc(100)
    }
    if(luck === 1) {
      setBtc(300)
    }
    if(luck === 2) {
      setBtc(500)
    }
    setx(!x)
    console.log(btc)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">สุ่ม Lucky Box</p>
        <button onClick={lucky} className="App-Button-Luck">
          สุ่ม
        </button>
        <button onClick={() => setModal(!modal)} className="App-Button-Info">
          รายละเอียดการเล่น
        </button>
        <div style={{ display: modal ? `flex` : `none` }} className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="App-Button-Close"
                onClick={() => setModal(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
              <h2 className="modal-title">รายละเอียดการเล่น</h2>
            </div>
            <div className="modal-body">
              <p>1. กดสุ่มได้เพียง 1 นั้น</p>
              <p>
                2. หลังจากรับรับ Link คุณต้องกดสุ่มไม่เกินเวลาที่ผู้สร้างกำหนด
              </p>
              <p>3. หลังจากสุ่มเสร็จเเคปหน้าจอส่งผู้สร้าง</p>
            </div>
          </div>
        </div>

        <div style={{ display: x ? `flex` : `none` }} className="App-Modal">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="App-Button-Close"
                onClick={() => setx(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
              <h2 className="modal-title">🎂 Happy 🎂 Birthday</h2>
              <p>{ today.toLocaleDateString("en-US") }</p>
            </div>
            <div className="modal-body">
              <p>
                Happy Birthday น้าา ขอให้ประสบความสำเร็จทางด้านการเรียน การงาน
                การเงิน เเละขอให้สุขภาพเเข็งเเรง คิดสิ่งใดขอให้สมปราถนา{" "}
              </p>
              <button>{`คุณได้รับ BTC จำนวน ${btc/786050} BTC`}</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
