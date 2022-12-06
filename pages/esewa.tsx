import React from 'react'

function Esewa() {
  return (
    <form action="https://uat.esewa.com.np/epay/main" method="POST">
      <input defaultValue={100} name="tAmt" type="hidden" />
      <input defaultValue={100} name="amt" type="hidden" />
      <input defaultValue={0} name="txAmt" type="hidden" />
      <input defaultValue={0} name="psc" type="hidden" />
      <input defaultValue={0} name="pdc" type="hidden" />
      <input defaultValue="EPAYTEST" name="scd" type="hidden" />
      <input defaultValue="2345" name="pid" type="hidden" />
      <input defaultValue="https://eakaksha.com/user/esewa/success" type="hidden" name="su" />
      <input defaultValue="https://eakaksha.com/user/esewa/fail" type="hidden" name="fu" />
      <input defaultValue="Submit" type="submit" />
    </form>
  )
}

export default Esewa