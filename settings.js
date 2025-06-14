require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIx1zlr*mTlDVQQAAHIHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGO4gRnTEchNFaVQabxvzUEIBJQhYFChO+O8b2NPT87A70ctTkWRknTx5TvIDFCWu0Rx1YPwDVAS3kKL+SLsKgTHQmzhGBAxBBCkEYwCtdGPulqcw1ZtJqe9QemXuu9ZMI+WW7rbTmfHm7P116QfJC3gMQdUccxz+oeAkZowlI9nKbSGx1+19xdtRuaCscoxdgix+oMoUyqIRBasX8OgrQkxwkVhVis6IwHyOuiXE5Gvwfa9cS00r7lmslq3pNGvi5b6kt3W8eJUKbrrdR8HB3nZn7WvwpXwhRvVhJePmMj+gDM*ktU5SubQ3x8L0S7N0zHxjabF2fYdf46RA0SxCBcW0+zLv9mTvna7GXpWUvYs5845vx+x1kgyUY+ezOjeZ66v5heUmG*FrwGmiVpeZywY3fqZb1yBchG3ArIsp54Un0ZcM4zY9O5vXc2f9DnxJPrSS*R*ek+kEtkfOyLj4lNeazWhcar5uls1hBcPMYQRd2SkmxrH9RfiGsORRdUobbN4Pc9NbvrbEh8F1PlIck3ca2YkrWNmK0K0+4UPakD+hzC73M2R2xco*e7eytE*VfntJ49KymRM3HQQ0enOJg7JDcHCc4L446lrEEbUJqv1E9O5zrSUbXdDWNxY5caou+UO2PSUvz44y1M0iMOYeQ0BQgmtKIMVl0ccUdQhg1PooJIg+2QXL3ZWeucuqCvebS34omZHdGutEYDAdSTZPdJ64vuIYzG3*AoagImWI6hpFU1zTknQuqmuYoBqM**4+BAW60fe59bcJ3BDEmNQ0KJoqL2H0MdSPjzAMy6agfleERn9ABIzZzzCiFBdJ3dPYFJCEKW6RkUJag3EM8xr9ahARFIExJQ36ZVqjjHrebU0S9IkzB0Nwfs4DR2AMeEEccYIqqSN1JI3l0V*1t2tfF1bVtwJRMAT5M09ReFmWRZkXVUka9Yl9*PELYV8wQhTivO6FsrAHjZdZluttaD2zbc1KNCPRwGdHH8p4p*5W+kZ4WpqQaXfz9cqdBVIhIFvy061zWecCm+9Xe*7tZN3Zl38pAsag2pUdSW6S284HYt248m2njBZpkMqb4i54ntDVxfTsWpf11FXEe7a2XQdDFq6USpOvd7JfzK+JumbnymZy3fIOg09r8*rS3xahFofo98sMRWA4BrvE7nKBKfSFN6img2NjuztvZDJlpBvBbXAfBNJFLKJmObG7yT6MFKyyrGQuJrr71nE71ZBCZrl2leztHrj4+q7Zp2fyn7sKP+XUz6p*jTF6Wr+A*QS*MLt35L3G2MfwtyI*t8l*OFIPoZUUs*uVbxWuywLTmHgHVUiboNxgmB0i1dla9msm3lwVPB7fh6DKIY1Lcu7*VUVEShyBISBl04t2VsTln3aKFswM7b31HNZU+zTCGz6jmsJzBcacIqoqx*My*561JGU1hXXas2CL2rnpVd1pVeVTSD98BbT+MawdePwDUEsBAhQDFAAACAgAjHXOWv+ZOUNVBAAAcgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '2348139598985',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
