# House Marketplace

Find and list houses for sale or for rent. This is a React.

## Usage

### Geolocation

The listings use Google geocoding to get the coords from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the **CreateListing.jsx** file you can set **geolocationEnabled** to "false" and it will add a latitude/longitude field to the form.

### Run

```bash
npm start
```
