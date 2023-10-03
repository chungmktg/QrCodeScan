import axios from 'axios';

function submitPhoneNumber(requestData: any, success: ()=> void, failed: ()=> void) {
  const apiUrl = `https://loyalty.justotter.com/api/loyalty-brands/store-give-points/${requestData.voucherId}`;
  const headers = {
    'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
    'Accept-Language': 'en-VN;q=1.0, vi-VN;q=0.9',
    'User-Agent': 'JustOtter/2.0.0 (com.justotter.loyalty; build:7; iOS 17.0.0) Alamofire/5.8.0',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywiaWF0IjoxNjk1ODkwMjEzfQ.VVTrfzSyfIQb5rwoSDs_kfqXUE8gZK5mAF0qrx1o9wk',
  };

  const params = {
    phone_country_code: requestData.phone_country_code,
    phone_number: requestData.phone_number,
  }

  axios.post(apiUrl, params, { headers })
    .then(response => {
        success()
    })
    .catch(error => {
        failed()
    });
}
export {submitPhoneNumber}

