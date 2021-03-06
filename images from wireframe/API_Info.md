# API

API RESOURCES:


-

**Yelp API**
-

My App
Client ID:

```rDnriYCyIYK49NlSCzevBg```

API Key:

```CZ2DBpudAEnZUpaL6oLVLFdT0u_BFapHwxKo3Ad_5ulSzDjvoVFCiyVBTVcNoPOQ7wQWtmEgDHmRB06r5jlc5uO3wosCLzR3qFT9kX_1ui3AwYjrc7tT0Kw_kKjQWnYx```

[Business Lookup:](https://www.yelp.com/developers/documentation/v3/business)
Response Body
{
 "id": "WavvLdfdP6g8aZTtbBQHTw",
 "alias": "gary-danko-san-francisco",
 "name": "Gary Danko",
 "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg
https://s3-media4.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg
",
 "is_claimed": false,
 "is_closed": false,
 "url": "https://www.yelp.com/biz/gary-danko-san-francisco",
 "price": "$$$$",
 "rating": 4.5,
 "review_count": 4521,
 "phone": "+14152520800",
 "photos": [
   "http://s3-media3.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg
http://s3-media3.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg
",
   "http://s3-media2.fl.yelpcdn.com/bphoto/ybXbObsm7QGw3SGPA1_WXA/o.jpg
http://s3-media2.fl.yelpcdn.com/bphoto/ybXbObsm7QGw3SGPA1_WXA/o.jpg
",
   "http://s3-media3.fl.yelpcdn.com/bphoto/7rZ061Wm4tRZ-iwAhkRSFA/o.jpg
http://s3-media3.fl.yelpcdn.com/bphoto/7rZ061Wm4tRZ-iwAhkRSFA/o.jpg
"
 ],
 "hours": [
   {
     "hours_type": "REGULAR",
     "open": [
       {
         "is_overnight": false,
         "end": "2200",
         "day": 0,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 1,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 2,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 3,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 4,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 5,
         "start": "1730"
       },
       {
         "is_overnight": false,
         "end": "2200",
         "day": 6,
         "start": "1730"
       }
     ],
     "is_open_now": false
   }
 ],
 "categories": [
   {
     "alias": "newamerican",
     "title": "American (New)"
   }
 ],
 "coordinates": {
   "latitude": 37.80587,
   "longitude": -122.42058
 },

 "location": {
   "address1": "800 N Point St",
   "address2": "",
   "address3": "",
   "city": "San Francisco",
   "state": "CA",
   "zip_code": "94109",
   "country": "US",
   "display_address": [
     "800 N Point St",
     "San Francisco, CA 94109"
   ],
   "cross_streets": "Hyde St & Larkin St"
 },
 "transactions": ["restaurant_reservation"]
}

Trip It API
-
[Trip It GitHub]
(http://tripit.github.io/api/doc/v1/index.html)

API KEY:

```88d8a0a5d1add6a7c0b03055fd2b0689a1f3b19f```

API SECRET:

```f1f1e235ad0a29989914987005309af3e6f2c3d2```

GET REQUEST:

A get request is used to retrieve a specific object from the TripIt API given its TripIt object ID. Since get requests do not change data they are all made via an HTTP GET request for a URL that takes the following form:

```
https://api.tripit.com/v1/get/<object type>/id/<TripIt Object ID>
<object type>
``` 


is one of the following strings:

- air
- activity
- car
- parking
- cruise
- directions
- lodging
- map
- note
- points_program
- profile
- rail
- restaurant
- transport
- trip
- weather

```
<TripIt Object ID>
``` 

- is the object ID of the TripIt object being requested.

The get request for a trip object can take an optional filter parameter called include_objects. The default value for this parameter is false but if it is set to true then the response from the API will include all objects (e.g. air, car, lodging, etc...) that are associated with that trip. This enables an API client to request a trip and all of its associated objects in a single call.

**LIST REQUEST:**

A list request is used to retrieve multiple objects given an object type and set of filter parameters. Since list requests do not change data they are all made via an HTTP GET request for a URL that takes the following form:

```https://api.tripit.com/v1/list/<object type>/<filter parameter>/<filter value>
<object type>
``` 

- is one of the following strings:
- trip
- object
- points_program
- Valid values for

```<filter parameter> and <filter value>``` 

depend on the

```<object type>```

All method Lists can be found here:

```http://tripit.github.io/api/doc/v1/index.html#method_list```


National Park Service API
-

**API KEY:**

 ```MOIl5DXkgrc8OSrnOkSRiOBk7p9L223YCYesjvfh``` 

**EXAMPLE URL REQUEST:**

 ```https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=MOIl5DXkgrc8OSrnOkSRiOBk7p9L223YCYesjvfh``` 

**GET REQUEST:**

- stateCode
- array [string]
- A comma delimited list of 2 character state codes.
fields
array [string]
(query)

A comma delimited list of resource properties to include in the JSON response in addition to the default properties. The available properties for each resource are listed in the documentation for each resource. Invalid property values will be ignored
--

-
### DelDOT
 (http://bidcondocs.delaware.gov/SHS/SHS_12004CAD_Add4b.pdf)

### GENERAL  INFORMATION  
This document covers the technical portions related to a new DelDOT XML service.  The 
service is being created to allow external resources to access DelDOT specific data sets via a 
consistent XML API. 
This will allow the external agencies that DelDOT approves to have access to pre-determine 
sets of datasets in a near real-time fashion. 

1.1    **Purpose**    
This document was created to describe the XML documents that the public feeds provide. This document is not intended to explain how the end user/agency is going to actually process the data, only what the url’s are, their associated XML documents and frequencies.
 
1.2    **Scope**   
This document will outline the types exposed data feeds, each feeds XML schema and the tag elements meaning. 

### OVERVIEW
2.0  **Overview**  
As the amount of dynamic data continues to expand within DelDOT so is the need for this data 
to be shared with other agencies (city, county, state and federal). As an initial phase of 
providing this data in a programmatic consumabl
e format, DelDOT is creating and exposing via 
their public website a set of data feeds. 
These feeds are intended for Business to Business (B2B) and Business to Government (B2G).  
They are not intended specifically for consum
er consumption since the general public can 
already use DelDOT public website many ways of viewing this same data via tabular listings or 
interactive maps. 
This document will not delve into how the integr
ator of these data feeds will go about consuming 
them and integrating them into their system.  It 
will only cover the type of feeds, the schema’s of 
those feeds and the tags within each XML schema (data dictionary of sorts). 

2.1    **Technical Requirements**    
To consume the DelDOT data feeds, you will need to be able to do the following:

- Make standard HTTP (port 80) requests to DelDOT public website (www.deldot.gov). 
- Receive standard UTF-8 encoded XML documents. 
- Parse UTF-8 encoded XML documents. 

### Technical Information
3.0  **Tech Info**  
The following discusses the data feeds, their content, their XML schema and each data type xml 
tag definition. 

3.1    **Data Feeds**    
The feeds are accessed via [DelDOT public website] 
(http://www.deldot.gov)

*The feeds that are currently available are listed below:* 

- Data Feed 
- URL 
- [Traffic Cameras] 
(http://www.deldot.gov/traffic/data.ejs?type=cam)
- [Real-Time Travel Advisories] 
(http://www.deldot.gov/traffic/data.ejs?type=rtta)
- [Scheduled Travel Restrictions] 
(http://www.deldot.gov/traffic/data.ejs?type=str) 
- [Traffic Status]
(http://www.deldot.gov/traffic/data.ejs?type=traffic)
- [Variable Message Signs]
(http://www.deldot.gov/traffic/data.ejs?type=vms) 
- [Variable Speed Limit] 
(http://www.deldot.gov/traffic/data.ejs?type=vsl)

 
3.2    **Traffic Cameras**   
This feed provides all publicly active traffic cameras that DelDOT maintains. Below is an example of the traffic camera 
XML. Only a portion of the actual XML document has been listed:

```<?xml version="1.0" encoding="UTF-8"?> 
<data> 
    <trafficCamera> 
        <id>96</id> 
        <location>DE 1 &amp; DE 54</location> 
        <area>Fenwick Island</area> 
        <url>http://webvideoserv.deldot.gov/video.jpg?source=CAM001&amp;framerate=0</url> 
        <latitude>38.45211733</latitude> 
        <longitude>-75.05216544</longitude> 
    </trafficCamera> 
    <trafficCamera> 
        <id>58</id> 
        <location>DE 1 &amp; DE 26 (Bethany Beach)</location> 
        <area>Bethany Beach</area> 
        <url>http://webvideoserv.deldot.gov/video.jpg?source=CAM002&amp;framerate=0</url> 
        <latitude>38.53814811</latitude> 
        <longitude>-75.05916194</longitude> 
    </trafficCamera> 
: 
: 
: 
    <trafficCamera> 
        <id>110015</id> 
        <location>U.S. 202 &amp; DE 92 (Naamans Road)</location> 
        <area>Talleyville</area> 
        <url>http://webvideoserv.deldot.gov/video.jpg?source=CAM048&amp;framerate=0</url> 
        <latitude>39.82873492</latitude> 
        <longitude>-75.54421168</longitude> 
    </trafficCamera> 
</data> 

```

3.2.1   **Traffic Cameras Polling Frequency**  
Polling frequency should not be more than every 15 minutes. 

3.2.2   **Traffic Cameras Tag Element Definitions**

Tag: 						Definition:
 
**id:** Unique number that represents the traffic camera in DelDOT system. 

**location:** Description of where the traffic camera is located. 

**area:** General area that the traffic camera is located.
 
**url:** Web url of an image from the traffic camera.
 
**latitude:** Latitude of traffic camera location. 

**longitude:** Longitude of traffic camera location.

3.3    **Real-Time Travel Advisories (RTTA)**  
 This feed provides all real-time travel advisories that the DelDOT Traffic Management Center (TMC) currently knows about and are impacting traffic in some way. Below is an example of the 
RTTA XML. Only a portion of the actual XML document has been listed:

```
<?xml version="1.0" encoding="UTF-8"?> 
<data> 
    <rtta> 
        <id>8614</id> 
        <type>Construction</type> 
        <county>New Castle County</county> 
        <details>9TH ST. BETWEEN GRANT ST. AND BANCROFT PARKWAY. DETOUR: TRAVELING EAST ON 9TH 
ST. DETOURED NORTH ON BANCROFT PARKWAY TO PENNSYLVANIA AVE. TRAVELING WEST ON 9TH ST. DETOURED AT 
THE INTERSECTION OF 9TH ST &amp; ST. TO LINCOLN ST. TO EAST ON PENNSYLVANIA AVE &amp; FOLLOW THE 
DETOUR TO BANCROFT PARKWAY. EXPECT DELAYS. 
        </details> 
        <latitude>38.52775596</latitude> 
        <longitude>-75.35728455</longitude> 
        <timestamp>2011-02-02 15:37:39.0</timestamp> 
    </rtta> 
: 
: 
: 
    <rtta> 
        <id>8543</id> 
        <type>Construction</type> 
        <county>New Castle County</county> 
        <details>MARYLAND AVE BETWEEN CLAYTON RD AND BROOKSIDE DR, NEAR RT 100. DELAYS ARE 
EXPECTED DURING AM AND PM RUSH HOURS. 
        </details> 
        <latitude>38.67237686</latitude> 
        <longitude>-75.40758133</longitude> 
        <timestamp>2010-08-02 13:11:00.0</timestamp> 
    </rtta> 
</data> 
```

3.3.1   **Real-Time   Travel   Advisories Polling Frequency**   
 Polling frequency should not be more than every 5 minutes.
 
3.3.2   **Real-Time   Travel   Advisories Tag Element Definitions**   
Tag:        		Definition: 

**id:** Unique number the RTTA is represented in DelDOT system. 

**Type:** Advisory type

**county:** County that the RTTA is located within. 

**details:** Detailed description of the advisory.
 
**latitude:** Latitude of RTTA location.
 
**longitude:** Longitude of RTTA location. 

**timestamp:** Timestamp of when the RTTA was last updated. 

3.4  **Scheduled Travel Restrictions (STR)**   
This feed provides all scheduled travel restrictions that DelDOT Public Relations knows will be 
impacting traffic at a scheduled time in the future.  A STR can be a reoccurring restriction. It could last an hour, a day, a week or months depending upon the project it is describing. Only a portion of the actual XML document has been listed:

```
<?xml version="1.0" encoding="UTF-8"?> 
<data> 
    <str> 
        <id>4437</id> 
        <type>Closure</type> 
        <startDate>09/15/2010</startDate> 
        <endDate>09/15/2011</endDate> 
        <county>Kent County</county> 
        <location>Strauss Avenue between Route 8/Halltown Road and Enss Road</location> 
        <details>The roadway will be closed on Friday, September 17 for deteriorating crossroad 
pipes. At all times, and emergency vehicles will have access. Detour signage is posted. 
        </details> 
        <latitude>39.11614361</latitude> 
        <longitude>-75.73914528</longitude> 
    </str> 
: 
: 
: 
    <str> 
        <id>4557</id> 
        <type>Restriction</type> 
        <startDate>09/08/2010</startDate> 
        <endDate>05/06/2011</endDate> 
        <county>New Castle County</county> 
        <location>South Market Street/Route 13 between A Street and Garashes Lane (Market Street 
Improvements T200900705) 
        </location> 
        <details>One lane open 24/7. Elevate roadway, relocation of utilities, drainage, 
constructing sidewalks, lighting, and landscaping. ALL BUSINESSES ARE OPEN DURING THIS 
CONSTRUCTION. 
        </details> 
        <latitude>39.73471618</latitude> 
        <longitude>-75.55508137</longitude> 
    </str> 
</data> 
```

3.4.1   **Scheduled Travel Restrictions Polling Frequency**
Polling frequency should not be more than every 5 minutes. 

3.4.2   Scheduled Travel Restrictions Tag Element Definitions 
Tag 
Definition 
id 
Unique number the STR is represented in DelDOT system. 
type 
Type of restriction. 
startDate 
The date when the restriction will start. 
endDate 
The date when the restriction will end. 
timestamp 
Timestamp of when the STR was last updated. 
county 
County that the STR is located within. 
location 
Detailed description of the location. 
details 
Detailed description of the restriction. 
latitude 
Latitude of STR location. 
longitude 
Longitude of STR location. 

3.5    Traffic    Status    
This feed provides you with traffic status in numerous locations throughout the entire state (even 
several leading into DE from MD).  This information is a summary of the traffic flow at each of 
those locations. Only a portion of the actual XML document has been listed.  

```
<?xml version="1.0" encoding="UTF-8"?> 
<data> 
    <trafficLocation> 
        <id>1.4409</id> 
        <name>Wavetronix Portable I95 0.5m S/O Tolls</name> 
        <status>No Data Available</status> 
        <rgbColor>CCCCCC</rgbColor> 
        <latitude>39.64251100</latitude> 
        <longitude>-75.77210600</longitude> 
        <timestamp>2011-03-23 04:25:52.0</timestamp> 
        <direction> 
            <name>Northbound</name> 
            <status>No Data Available</status> 
            <rgbColor>CCCCCC</rgbColor> 
            <numberOfLanes/> 
            <avgSpeed/> 
            <fiveMinuteVolume/> 
            <fiveMinuteMaxVolume/> 
            <fiveMinuteVolumePercentage/> 
            <oneHourProjectedVolume/> 
            <vehiclesPerHour/> 
            <oneHourMaxVolume/> 
            <fiveMinuteOccupancy/> 
            <fiveMinuteOccupied/> 
            <volumePlusOccupancy/> 
            <sampleSize/> 
            <sampleSizeExpected/> 
            <sampleSizePercentage/> 
            <latitude>39.64271100</latitude> 
            <longitude>-75.77210600</longitude> 
            <timestamp>2011-03-23 04:25:52.0</timestamp> 
        </direction> 
        <direction> 
            <name>Southbound</name> 
            <status>No Data Available</status> 
            <rgbColor>CCCCCC</rgbColor> 
            <numberOfLanes/> 
            <avgSpeed/> 
            <fiveMinuteVolume/> 
            <fiveMinuteMaxVolume/> 
            <fiveMinuteVolumePercentage/> 
            <oneHourProjectedVolume/> 
            <vehiclesPerHour/> 
            <oneHourMaxVolume/> 
            <fiveMinuteOccupancy/> 
            <fiveMinuteOccupied/> 
            <volumePlusOccupancy/> 
            <sampleSize/> 
            <sampleSizeExpected/> 
            <sampleSizePercentage/> 
            <latitude>39.64231100</latitude> 
            <longitude>-75.77210600</longitude> 
            <timestamp>2011-03-23 04:25:52.0</timestamp> 
        </direction> 
    </trafficLocation> 
: 
: 
: 
    <trafficLocation> 
        <id>0.139</id> 
        <name>US 113 &amp; RT 36</name> 
                <status>No Delay</status> 
                <rgbColor>339900</rgbColor> 
                <latitude>38.90169506</latitude> 
                <longitude>-75.43966028</longitude> 
                <timestamp>2011-03-23 14:55:00.0</timestamp> 
                <direction> 
                    <name>Northbound</name> 
                    <status>No Delay</status> 
                    <rgbColor>339900</rgbColor> 
                    <numberOfLanes>2</numberOfLanes> 
                    <avgSpeed/> 
                    <fiveMinuteVolume>53</fiveMinuteVolume> 
                    <fiveMinuteMaxVolume>300</fiveMinuteMaxVolume> 
                    <fiveMinuteVolumePercentage>18</fiveMinuteVolumePercentage> 
                    <oneHourProjectedVolume>636</oneHourProjectedVolume> 
                    <vehiclesPerHour>1800</vehiclesPerHour> 
                    <oneHourMaxVolume>3600</oneHourMaxVolume> 
                    <fiveMinuteOccupancy>3</fiveMinuteOccupancy> 
                    <fiveMinuteOccupied>18</fiveMinuteOccupied> 
                    <volumePlusOccupancy>21</volumePlusOccupancy> 
                    <sampleSize>10</sampleSize> 
                    <sampleSizeExpected>10</sampleSizeExpected> 
                    <sampleSizePercentage>100</sampleSizePercentage> 
                    <latitude>38.90189506</latitude> 
                    <longitude>-75.43966028</longitude> 
                    <timestamp>2011-03-23 14:55:00.0</timestamp> 
                </direction> 
                <direction> 
                    <name>Southbound</name> 
                    <status>No Delay</status> 
                    <rgbColor>339900</rgbColor> 
                    <numberOfLanes>2</numberOfLanes> 
                    <avgSpeed/> 
                    <fiveMinuteVolume>50</fiveMinuteVolume> 
                    <fiveMinuteMaxVolume>300</fiveMinuteMaxVolume> 
                    <fiveMinuteVolumePercentage>17</fiveMinuteVolumePercentage> 
                    <oneHourProjectedVolume>600</oneHourProjectedVolume> 
                    <vehiclesPerHour>1800</vehiclesPerHour> 
                    <oneHourMaxVolume>3600</oneHourMaxVolume> 
                    <fiveMinuteOccupancy>2</fiveMinuteOccupancy> 
                    <fiveMinuteOccupied>14</fiveMinuteOccupied> 
                    <volumePlusOccupancy>19</volumePlusOccupancy> 
                    <sampleSize>10</sampleSize> 
                    <sampleSizeExpected>10</sampleSizeExpected> 
                    <sampleSizePercentage>100</sampleSizePercentage> 
                    <latitude>38.90149506</latitude> 
                    <longitude>-75.43966028</longitude> 
                    <timestamp>2011-03-23 14:55:00.0</timestamp> 
                </direction> 
            </trafficLocation> 
        </data> 
        
        ```
        
        
        3.6    Variable Message Sign (VMS)  
        This feed provides you with the current message displayed on the VMS located throughout the 
        state.  
        Only a portion of the actual XML document has been listed.
        <?xml version="1.0" encoding="UTF-8"?> 
        <data> 
            <vms> 
                <id>4082</id> 
                <message/> 
                <latitude>39.675716</latitude> 
                <longitude>-75.681714</longitude> 
                <timestamp>2011-03-23 14:56:33.0</timestamp> 
            </vms> 
        : 
        : 
        : 
            <vms> 
                <id>4918</id> 
                <message>SR 1 SB 
                    <br/> 
                    CLOSED 
                    <br/> 
                    AT I-95 
                    <br/> 
                    --------- 
                    FOLLOW 
                    <br/> 
                    DETOUR 
                </message> 
                <latitude>39.694274</latitude> 
                <longitude>-75.652649</longitude> 
                <timestamp>2011-03-23 14:56:33.0</timestamp> 
            </vms> 
        </data> 
        
        4.2    Real-Time    Travel    Advisories    
        <?xml version="1.0" encoding="UTF-8"?> 
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"> 
          <xs:element name="data"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element maxOccurs="unbounded" ref="rtta"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="rtta"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element ref="id"/> 
                <xs:element ref="type"/> 
                <xs:element ref="county"/> 
                <xs:element ref="details"/> 
                <xs:element ref="latitude"/> 
                <xs:element ref="longitude"/> 
                <xs:element ref="timestamp"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="id" type="xs:integer"/> 
          <xs:element name="type" type="xs:NCName"/> 
          <xs:element name="county" type="xs:string"/> 
          <xs:element name="details" type="xs:string"/> 
          <xs:element name="latitude" type="xs:decimal"/> 
          <xs:element name="longitude" type="xs:decimal"/> 
          <xs:element name="timestamp" type="xs:string"/> 
        </xs:schema> 
        
        4.3    Scheduled Travel Restrictions 
        <?xml version="1.0" encoding="UTF-8"?> 
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"> 
          <xs:element name="data"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element maxOccurs="unbounded" ref="str"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="str"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element ref="id"/> 
                <xs:element ref="type"/> 
                <xs:element ref="startDate"/> 
                <xs:element ref="endDate"/> 
                <xs:element ref="county"/> 
                <xs:element ref="location"/> 
                <xs:element ref="details"/> 
                <xs:element ref="latitude"/> 
                <xs:element ref="longitude"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="id" type="xs:integer"/> 
          <xs:element name="type" type="xs:NCName"/> 
          <xs:element name="startDate" type="xs:string"/> 
          <xs:element name="endDate" type="xs:string"/> 
          <xs:element name="county" type="xs:string"/> 
          <xs:element name="location" type="xs:string"/> 
          <xs:element name="details" type="xs:string"/> 
          <xs:element name="latitude" type="xs:decimal"/> 
          <xs:element name="longitude" type="xs:decimal"/> 
        </xs:schema> 
        
        4.4    Traffic    Status    
        <?xml version="1.0" encoding="UTF-8"?> 
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"> 
          <xs:element name="data"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element maxOccurs="unbounded" ref="trafficLocation"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="trafficLocation"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element ref="id"/> 
                <xs:element ref="name"/> 
                <xs:element ref="status"/> 
                <xs:element ref="rgbColor"/> 
                <xs:element ref="latitude"/> 
                <xs:element ref="longitude"/> 
                <xs:element ref="timestamp"/> 
                <xs:element maxOccurs="unbounded" ref="direction"/> 
              </xs:sequence> 
            </xs:complexType> 
          </xs:element> 
          <xs:element name="id" type="xs:decimal"/> 
          <xs:element name="direction"> 
            <xs:complexType> 
              <xs:sequence> 
                <xs:element ref="name"/> 
                <xs:element ref="status"/> 
                <xs:element ref="rgbColor"/> 
                <xs:element ref="numberOfLanes"/> 
                        <xs:element ref="avgSpeed"/> 
                        <xs:element ref="fiveMinuteVolume"/> 
                        <xs:element ref="fiveMinuteMaxVolume"/> 
                        <xs:element ref="fiveMinuteVolumePercentage"/> 
                        <xs:element ref="oneHourProjectedVolume"/> 
                        <xs:element ref="vehiclesPerHour"/> 
                        <xs:element ref="oneHourMaxVolume"/> 
                        <xs:element ref="fiveMinuteOccupancy"/> 
                        <xs:element ref="fiveMinuteOccupied"/> 
                        <xs:element ref="volumePlusOccupancy"/> 
                        <xs:element ref="sampleSize"/> 
                        <xs:element ref="sampleSizeExpected"/> 
                        <xs:element ref="sampleSizePercentage"/> 
                        <xs:element ref="latitude"/> 
                        <xs:element ref="longitude"/> 
                        <xs:element ref="timestamp"/> 
                      </xs:sequence> 
                    </xs:complexType> 
                  </xs:element> 
                  <xs:element name="numberOfLanes" type="xs:string"/> 
                  <xs:element name="avgSpeed" type="xs:string"/> 
                  <xs:element name="fiveMinuteVolume" type="xs:string"/> 
                  <xs:element name="fiveMinuteMaxVolume" type="xs:string"/> 
                  <xs:element name="fiveMinuteVolumePercentage" type="xs:string"/> 
                  <xs:element name="oneHourProjectedVolume" type="xs:string"/> 
                  <xs:element name="vehiclesPerHour" type="xs:string"/> 
                  <xs:element name="oneHourMaxVolume" type="xs:string"/> 
                  <xs:element name="fiveMinuteOccupancy" type="xs:string"/> 
                  <xs:element name="fiveMinuteOccupied" type="xs:string"/> 
                  <xs:element name="volumePlusOccupancy" type="xs:string"/> 
                  <xs:element name="sampleSize" type="xs:string"/> 
                  <xs:element name="sampleSizeExpected" type="xs:string"/> 
                  <xs:element name="sampleSizePercentage" type="xs:string"/> 
                  <xs:element name="name" type="xs:string"/> 
                  <xs:element name="status" type="xs:string"/> 
                  <xs:element name="rgbColor" type="xs:NMTOKEN"/> 
                  <xs:element name="latitude" type="xs:decimal"/> 
                  <xs:element name="longitude" type="xs:decimal"/> 
                  <xs:element name="timestamp" type="xs:string"/> 
                </xs:schema> 
                
                4.6    Variable    Speed    LImit    
                <?xml version="1.0" encoding="UTF-8"?> 
                <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"> 
                  <xs:element name="data"> 
                    <xs:complexType> 
                      <xs:sequence> 
                        <xs:element maxOccurs="unbounded" ref="vsl"/> 
                      </xs:sequence> 
                    </xs:complexType> 
                  </xs:element> 
                  <xs:element name="vsl"> 
                    <xs:complexType> 
                      <xs:sequence> 
                        <xs:element ref="id"/> 
                        <xs:element ref="speedlimit"/> 
                        <xs:element ref="latitude"/> 
                        <xs:element ref="longitude"/> 
                        <xs:element ref="timestamp"/> 
                      </xs:sequence> 
                    </xs:complexType> 
                  </xs:element> 
                  <xs:element name="id" type="xs:integer"/> 
                  <xs:element name="speedlimit" type="xs:integer"/> 
                  <xs:element name="latitude" type="xs:decimal"/> 
                  <xs:element name="longitude" type="xs:decimal"/> 
                  <xs:element name="timestamp" type="xs:string"/> 
                </xs:schema> 
