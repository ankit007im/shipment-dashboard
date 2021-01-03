# Shipment DashBoard 🔥🔥🔥


### Links For Projects

 [https://intugine-hiring.s3.ap-south-1.amazonaws.com/FrontendDesign.pdf](Design By Intugine)
 
 [ https://intugine-hiring.s3.ap-south-1.amazonaws.com/FrontendAssets.zip](Design Assets By Intugine)
 
 [https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch](API By Intugine)
 
 ## Task
 
The design is for a shipment dashboard where the various shipments are shown which are going through various vendors like FedEx, Bluedart etc.. The dashboard shows these shipments, give their current status by a timeline view, and there are some counters which shows the number of shipments which are in a particular state e.g. DEL (Delivered), INT (In Transit), OOD (Out for Delivery) etc….


1. Replicate the Design [1][2].
2. Use API endpoint [3] to fetch Shipments and show them in the right hand tabular view [1].
3. HTTP Method - POST
4. The API requires some data to be passed in various places in the API which are :-
```
Bearer Token - tTU3gFVUdP
Body - {
email: [your_email_address] e.g. {email: “mayankmittal@intugine.com”}

}
```

5. Response contains “data” key which is an array which will be used for the data. Shown in Data sample below.
6. Calculate the counter values from the data using ‘current_status_code’ in the shipment data.
 -- Table View (RIght)
 -- On selecting different status counter ( 3rd point ) show shipments of the selected status.
 -- Use filtered data based on selected counter e.g. DEL, INT, OOD.
 -- DEL (Delivered) counter will be selected by default.
Timeline View [1] (Left)
Use `scan` array in the shipment data for this.
The no. of elements in the timeline will be same as of `scan` array length
Each element within the timeline view will contain the data which is available in individual elements of the `scan` array and mentioned in the Data sample below.

## API Structure

```
{

    "data": [

        {

            "_id": "5d309ea2048c0a3321692de9", //Unique Id (Not used in the design)

            "awbno": "68816235", // AWB Number

            "carrier": "Safexpress", // Use this for Transporter and Brand both.

            "pickup_date": "2019-07-11 00:00:00" //Start Date,

            "current_status": "Out for Delivery", // Current status, used for counters and in tabular view in `Status`

            "current_status_code": "OOD", //Current Status Code, used for counters

            "order_data": "", //Not used

            "recipient": "", // Not used

            "extra_fields": {

                "expected_delivery_date": "1970-01-01 05:30:00" // ETD

            },

            "from": "WHITEFIELD", //Source

            "to": "NEW DELHI", //Destination

            "time": "2019-07-18 02:13:57",

            "scan": [ //Used in timeline view

                {

                    "time": "2019-07-18 02:13:57", //Time in timeline view (right)

                    "location": "Consignment Out for Delivery", // Status in timeline view (left)

                    "status_detail": "OUT FOR DELIVERY" //not used

                },

                {

                    "time": "2019-07-17 23:02:24",

                    "location": "Waybill Undelivered",

                    "status_detail": "UN-DELIVERED"

                },

                {

                    "time": "2019-07-17 03:59:19",

                    "location": "Consignment Out for Delivery",

                    "status_detail": "OUT FOR DELIVERY"

                },

                {

                    "time": "2019-07-15 18:49:46",

                    "location": "Waybill Undelivered",

                    "status_detail": "UN-DELIVERED"

                },

                {

                    "time": "2019-07-15 04:14:20",

                    "location": "Consignment Out for Delivery",

                    "status_detail": "OUT FOR DELIVERY"

                },

                {

                    "time": "2019-07-13 20:41:28",

                    "location": "Consignment Arrived at DELHI",

                    "status_detail": "ARRIVED AT DESTINATION"

                },

                {

                    "time": "2019-07-11 07:01:53",

                    "location": "Consignment In Transit To Next Hub",

                    "status_detail": "IN-TRANSIT"

                },

                {

                    "time": "2019-07-11 03:05:26",

                    "location": "Consignment Arrived at BANGALORE",

                    "status_detail": "IN-TRANSIT"

                },

                {

                    "time": "2019-07-11 00:00:00",

                    "location": "Waybill Generated at WHITEFIELD",

                    "status_detail": "BOOKED"

                }

            ],

            "tracking_url": "https://s.shipway.in/21759772/68816235",

            "createdAt": "2019-07-18T16:30:26.155Z"

        },

……

    ]

}
```
## Uses 

Used ```Axios``` for fetching API
Used ```React Hooks``` for states

# Thank You


