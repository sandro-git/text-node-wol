const mac = ["a4bb6d51fa4a","30d042e9f563","a4bb6d521eb8","a4bb6d521c18","a4bb6d5227d0","a4bb6d522D3a","a4bb6d51fce3","a4bb6d51fce5"]

const wol =require('wake_on_lan')

mac.forEach(address => wol.wake(address))