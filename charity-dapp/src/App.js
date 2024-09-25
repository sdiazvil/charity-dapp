import React, { useEffect, useState } from 'react';  
import Web3 from 'web3';  
import CharityContract from './contracts/Charity.json';  
  
const App = () => {  
  const [web3, setWeb3] = useState(null);  
  const [account, setAccount] = useState(null);  
  const [contract, setContract] = useState(null);  
  const [donationAmount, setDonationAmount] = useState('');  
  
  useEffect(() => {  
    const init = async () => {  
      if (window.ethereum) {  
        const web3Instance = new Web3(window.ethereum);  
        await window.ethereum.enable();  
        setWeb3(web3Instance);  
  
        const accounts = await web3Instance.eth.getAccounts();  
        setAccount(accounts[0]);  
  
        const networkId = await web3Instance.eth.net.getId();  
        const deployedNetwork = CharityContract.networks[networkId];  
          
        if (deployedNetwork) {  
          const instance = new web3Instance.eth.Contract(  
            CharityContract.abi,  
            deployedNetwork && deployedNetwork.address  
          );  
          setContract(instance);  
        } else {  
          console.error('El contrato no está desplegado en esta red');  
        }  
      } else {  
        console.error('No se detectó proveedor de Web3. Asegúrate de que MetaMask esté instalado.');  
      }  
    };  
  
    init();  
  }, []);  
  
  const handleDonation = async () => {  
    if (contract) {  
      try {  
        await contract.methods.donate().send({  
          from: account,  
          value: web3.utils.toWei(donationAmount, 'ether')  
        });  
        alert('¡Donación realizada con éxito!');  
      } catch (error) {  
        console.error('Error al realizar la donación:', error);  
      }  
    }  
  };  
  
  return (  
    <div>  
      <h1>Charity DApp</h1>  
      {account ? (  
        <div>  
          <p>Cuenta: {account}</p>  
          <input  
            type="text"  
            placeholder="Cantidad en ETH"  
            value={donationAmount}  
            onChange={(e) => setDonationAmount(e.target.value)}  
          />  
          <button onClick={handleDonation}>Donar</button>  
        </div>  
      ) : (  
        <p>Conectando a MetaMask...</p>  
      )}  
    </div>  
  );  
};  
  
export default App;  
