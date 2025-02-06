export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/dXJuOm1ieHJldDp3cEdUX1NDODljcUsxQXdtN0duRTFxT2Q0cld2MEwwQ0Z3YTBtM2JpXzVTRWhoeEdIcHlpU1l1QWprLVVEc1gtbXRiMXhfUTFtY3BtTnBKM1djd1k2aXJhNDZCVUNSU3lCZW9BaEFnNDJhNVJhSnMtU3FxQ25XVUNpU0tmeVg4cVBGaVlZRDQ2dWNrZ2x1Y19MX0NIcVB3Q25mb1V3TTdCak15dzY1TnhKU2pDWXBqY1VSTDJWdU50XzczVkZmZ0VQUjBHblN3ZEtQZlZsYUpLXzZMaFBvZ2xNcHE4VEZYZ0h2VW9SZ05Ca1poSGJIZ1JaTzBKYW1jV3lKaXE0T0lpUlcyWWNycG9FNUtlQkFUY0d6LTNvUWI5eVhid3NILXhzMjd2ekdwUGZTY2dNNDVFaE1VanpNT0hvT0dpODBpNnNPb3ZWYl9ZV2hnTTJSRXZPSF85MmZGMHpFUl9qY3NQT2Q3bmJ0WUxuUk8tVHlTck1rdnE3cTFKUTg1UlBKWlYzM3RrcWN4VXIwX2FNMDZyV3dpQ0tZT3RGYTVFSjI3YUxlVUt3ZnVNYTZUcnpoUjJKODZZWmRPOUpyM0VxVEZfbVhzR2ZpcG9sWl81N1BBdUxaeTA2OEFJR08yOTRaV1Myci0zX2kyenY1SGlOYlBnQkQ2UF9Nam1SS2E2MlRQU3NvaUNUOVR6dlEwRmc3c01CTkhsUkFVcmg3cXRqWGl3UzlOcjRVR25UMGZDR2Fya3dnVnZPNTdYSW9sb2ZaY2NlUjloRHJzbmVHUHZtWWdaWkFxV3BJR3ltM2JBRUE0a2lQOENPSkxtTnYxbFA5X2M3dk1qNVJyUlJ6OXVLWlpBQXJIcWsyNWhoU3laWUF2WVRuVEtoZHMtTGRPVF9SWGVteTFubWpjNmlISHhOUWZTRjFxMFRFeEltSVVSa1hHWTZkaHE2Z2IycXY2elJ2cW9CUXhoNmxwbzg0Z0JlMTBaY2tHQ3paQ3NVSWh1TTE5YkE1S1FfY1I2NTZ0dm9TQ0lFSXI2d3FhVXFxaTBBWjNmLU53eG1zeFB4bDU0X2NHSEJ2RnVjeVlYS0pPZnBjbzhPWWtCREpZVFNweGtxQWZVLWREdE0tcWxITlBRa21uSklSN1FrcWlsa1VtSldSME9VdTZMNjJmNzR3Z1RWRzZoQnBJMEdYOG5xOUxBaXgwY3hWY0RpNjFkVUxOQzVNUGllM0xXeDM2aVI5Q09KLW9QR2FnSXpSLXZKdWFYZS1uMjRSVkZBVzVWQWxfT3pDV0FzeWxxeTZ0ek5jdTFkaklQb2pORnNxYVUzNUJJUHBqQlVZNjhsb0c1RnVvT3lXaXVUQ3BSUXlxWXU5UHdSWU02RFlBLXBuX2xadmg0cldKdzNITGVwM2xVZlZQVFlUSWFaeXdMelBDYXZVUGc1cjFjUk5xa2M4anhQNHhQVzZNS2w4T3FpbkxXUGt6NWNoWDBreUhobkhIZUVIOXpKZnEzbTU4Qzh4bUFIaG94RUJNclNESlRnazdaS0pLVV9YRmQxTkYzQ2NHUXlBV3NaN0p2LTdhYW1HajFRZEw1SmV6QjJURU1hanFnRnkxbHJmS1dNLXRvSWQ2ZzV0RFhVNURyYWpwOUc3UUJIUFMzUHNQRHZkT29oLUU4T0VWNkY0UWxyRFhFZ3F5Nm5yVllOMTFZc2VMT0hCdEVpTm1uODUxLWc3MGNSTVdMQ0I2N1hwWlFYcmlDX0E5ak1qSTFIdmYwQWREVzBlNm9NSnk5TlMxOWtCZEQ5eDVvSVRvLUYtWS0zczcyLXBvLUJyNUxNcFJmSGJQemdqVklOamRmZnAtM3ZZM2NvSFU1TVlRWHJUZ05jQWlVbUdkWms2STRWSlhWcTJUSjFRVU5BbGhPOWpydFNwWnBfZFdHT2o3ZjhodlpyclhvMmREYVJKeHhtaEwwNWNjWmJvMEpNWXR5M0s5OFdGb0sxcnpVSEozNEVXaV9iRHdHN1FpNlg4MFNLUjdrRS1DV2puNlc4eUNpN0dqX3ZZZ3I3MXBjRDB0SWtjN3dYV3VmUzctdU5TZUdmVmpfdTRTNV8xdE5ZcTNfQ3ZFRUd6dlVjZWxucFJ3Y1V6U0VMaEJoSDJBME5NV0xLTTRjYmVZQjNjdy10dzdobHg3Ql9QVV9JYjNYb0xMV3Npejk2LVRMS0FKeGxvclBmbXBkcU13a2x6WTBQSm1XV3ZyWmNUWDJtQm5QcXFIYUx4SGtOVWVPQ0RNeWZuNjNyRGhqMnFKU2RBbi1KenplQldzNGpJT3drRzAtel92bm5HQnVxZVdiUjV2RXFJZkpoelJ4eVg5UVE1V08wWHRXZE1sOG9fUHkwS2FSUVB4UzBOeURETVZ5Qzl5d3ZKNUpwbElaSGo2aDUtaHRDWWZxeVg4eWxoemhpRWtiYW82bzJZS2NLMHQySE5QVF91UFpSR0JrTzJZUDZrSWNvVWZubUE0RWNhdFYzakJxdTQ0TDZwQjU1M3BIaGNJRV9LY25OYW10REZHQXpfc19xRlExdVdJc1hHN3VYc1BvbzV6ZFp3Q2RCc1NCVU5MZzZlOG9TcWhma2FRWkFxMVBzQzdyQS13TFhfeUQxdXpZM2pjbU5kcmpiclVBWk5OSldXWUUzQkx6dWVNQTN0dm15N3lhbzFaUEJsbVBQSk9lY2lkYnVtV2N6b1VJX1ZodGJ0TmEtTGdNZnRhYll5Ry1zSlpYakFwQkpONEVBLXNud0t6bTJIMVVPOF9UWlpDM183d3pPR0hfN09YOExIX1ZJWjlzMDktbi15Zkl5M2NHeEZrZFdFWXVhOHlPV0JmNkpabFdsM3lSUWU2SkE5el9jSzVQalE2UzVSMlhzSmxicEtsR0Vmc3hyYnJJaGxnUUVqX01HeWNXR1VOcnB4dmd0R0NTQ0JEOVJEVVVVSm4zQW9BZE9XRk5aN2xrQ3NSdVBBdk54aVZWZ2xWOWFfV2hpRWoyZHVQclZXQjRGNnNFOEtKUlliQktoYi1rSmk0NmxzZzJ0RkZEdGtjTHZ4SzdVUWtlMkVrM3g5aUZqU3YyX3g4VHkyai10dU4zOHpHdmZvQXlPTUpROGw5YW5yelQ0MEQ4U0pTNTE2YnhjMXRvRWEzZGdIVUotalhVX1ZvYV9GS1JmdEc0eDlJZEVWZURLWUhkVEptU2kzS3p4M2ZDWFhqS0I0cVZwRWxxMVZyS2xDMDFEc1M0YUw0OE5qUnBxVWR4N0I1clA2djE5UmhjakRUdWZCdFZPRVdSY0h5RE84OHR6cmh3azltT3NBSXVUVjJheFU5dldycElBMXg4aEFvaTctS1hkam5nTEJCaE1FSGpVeWhDb0lfSlZlbUtLb1dBWUlIX3BNOWNlNEN4VXdkRldLMDZxRzRZQXJuN0JRV0hBNDM3Ty1CVXdLWHVDZ0FRcGRzbGt3Zm5GYU09?language=en&session_token=0cde265f-abc2-4c21-894d-ac3ccca02aa6&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    return data.features;
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
};