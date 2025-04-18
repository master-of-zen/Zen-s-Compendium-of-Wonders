/* Zen's Compendium of Wonders - Main Styles */

/* Directory Styling */
.zens-header {
  margin-top: 10px;
  padding: 5px;
  background: rgba(201, 173, 106, 0.2);
  border-bottom: 1px solid #c9ad6a;
}

.zens-header h3 {
  color: #7b5a12;
  font-size: 1.1em;
  margin: 0;
  text-align: center;
}

.zens-item {
  border-left: 3px solid #c9ad6a;
  transition: background-color 0.2s;
}

.zens-item:hover {
  background-color: rgba(201, 173, 106, 0.1);
}

.zens-item .item-type,
.zens-item .item-rarity {
  font-size: 0.8em;
  margin-right: 5px;
  padding: 0px 5px;
  border-radius: 3px;
  background-color: rgba(201, 173, 106, 0.2);
  color: #5a4209;
}

/* Creation Dialog Styling */
.zens-section {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #c9ad6a;
}

.zens-section label {
  display: block;
  font-weight: bold;
  color: #7b5a12;
  margin-bottom: 5px;
}

.zens-items-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.zens-item-button {
  background: rgba(201, 173, 106, 0.1);
  border: 1px solid #c9ad6a;
  border-radius: 3px;
  padding: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.zens-item-button:hover {
  background: rgba(201, 173, 106, 0.3);
}

.zens-item-button img {
  margin-right: 5px;
}

/* Item Sheet Enhancements for Zen's items */
.item-sheet.zens-item .window-header {
  background: linear-gradient(to right, rgba(201, 173, 106, 0.3), transparent);
}

.item-sheet.zens-item .window-title {
  color: #7b5a12;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}

/* Styling for items when displayed in character sheets */
.zens-equipped-item {
  box-shadow: 0 0 5px #c9ad6a;
}

/* Chat Message styling for Zen's items */
.chat-message.zens-message {
  background-image: url("../assets/parchment-bg.jpg");
  background-size: cover;
  color: #4a3f35;
}

/* Special effect for when a Zen's item is used */
.zens-item-effect {
  animation: zensGlow 2s infinite;
}

@keyframes zensGlow {
  0% { box-shadow: 0 0 5px #c9ad6a; }
  50% { box-shadow: 0 0 15px #c9ad6a; }
  100% { box-shadow: 0 0 5px #c9ad6a; }
}
