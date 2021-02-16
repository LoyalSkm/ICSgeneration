ICS file generation is as follows

URL for generation 	: https://icrxjxffp5.execute-api.eu-central-1.amazonaws.com/v1/icsgeneration
In the header there is an api key, which can be found in the API gateway inside the lambda function

Example of request body:
{
  "text": 	"NAME OF EVENT", //type - string. Required
  "projectId": 	"ID PROJECT", 	//type - string. Required
  "body" :{
    "start": [2022, 2, 12, 20, 40], //type - list. Required
    "duration": {        //type - Object. Required
      "hours": 6,
      "minutes": 30
    },
    "title": "Bolder Boulder", 	//type - string. Optional
    "description": "Annual 10-kilometer run in Boulder, Colorado", //type - string. Optional
    "location": "Folsom Field, University of Colorado (finish line)", //type - string. Optional
    "url": "https://easy-hookah.business.site/?m=true", //type - string. Optional
    "geo": {				//type - object. Optional
      "lat": 47.83294349715641,		//type - number. Optional
      "lon": 35.133590826973915		//type - number. Optional
    },
    "categories": [		//type - list. Optional
	'10k races',
 	'Memorial Day Weekend',
	'Boulder CO'],
    "status": "CONFIRMED",	//type - string. Optional
    "busyStatus": "BUSY",	//type - string. Optional
    "organizer": { 		//type - object. Optional
	name: 'Admin',
 	email: 'Race@BolderBOULDER.com' },
    "attendees": [	//type - list of object. Optional
      {
        "name": "Федор Гороховец",
        "email": "fedir@example.com",
        "rsvp": true,
        "partstat": "ACCEPTED",
        "role": "REQ-PARTICIPANT"
      }
    ]
  }
}



	Property			Description							Example

start			Required. Date and time at which the event begins.		[2000, 1, 5, 10, 0] (January 5, 2000)

startInputType		Type of the date/time data in start:
			local (default): passed data is in local time.
			utc: passed data is UTC	

startOutputType		Format of the start date/time in the output:
			utc (default): the start date will be sent in UTC format.
			local: the start date will be sent as "floating" 
			(form #1 in RFC 5545)	

end			Time at which event ends. Either end or duration is required,	[2000, 1, 5, 13, 5] (January 5, 2000 at 1pm)
			but not both.		
					
endInputType		Type of the date/time data in end:
			local: passed data is in local time.
			utc: passed data is UTC.
			The default is the value of startInputType	
endOutputType		Format of the start date/time in the output:
			utc: the start date will be sent in UTC format.
			local: the start date will be sent as "floating" 
			(form #1 in RFC 5545).
			The default is the value of startOutputType	

duration		How long the event lasts. Object literal having form		{ hours: 1, minutes: 45 } (1 hour and 45 minutes) 
			{ weeks, days, hours, minutes, seconds }
			Either end or duration is required, but not both.		

title			Title of event.							'Code review'

description		Description of event.						'A constructive roasting of those seeking to merge into master branch'

location		Intended venue							Mountain Sun Pub and Brewery

geo			Geographic coordinates (lat/lon)				{ lat: 38.9072, lon: 77.0369 }

url			URL associated with event					'http://www.mountainsunpub.com/'

status			Three statuses are allowed: 
				TENTATIVE,
 				CONFIRMED, 
				CANCELLED						CONFIRMED

organizer		Person organizing the event					{ name: 'Adam Gibbons', email: 'adam@example.com', dir:
											'https://linkedin.com/in/adamgibbons' }

attendees		Persons invited to the event					[{ name: 'Mo', email: 'mo@foo.com', rsvp: true }, { name: 'Bo', email:
											'bo@bar.biz', dir: 'https://twitter.com/bo1234', partstat: 'ACCEPTED', role:
											'REQ-PARTICIPANT' }]

categories		Categories associated with the event				['hacknight', 'stout month']

alarms			Alerts that can be set to trigger before, 			{ action: 'display', trigger: [2000, 1, 4, 18, 30] } OR
			during, or after the event. The following attach		{ action: 'display', trigger: { hours: 2, minutes: 30, before: true } OR
			properties work on Mac OS: Basso, Blow, Bottle, Frog,		{ action: 'display', trigger: { hours: 2, minutes: 30, before: false } OR
			Funk, Glass, Hero, Morse, Ping, Pop, Purr, Sousumi,		{ action: 'audio', trigger: { hours: 2, minutes: 30, before: true },
			Submarine, Tink							repeat: 2, attachType: 'VALUE=URI', attach: 'Glass' }
			    
productId		Product which created ics, PRODID field				'adamgibbons/ics'

uid			Universal unique id for event, produced by 			'28021620-be61-11e7-be87-5f3ab42f0785'
			default with uuid/v1. Warning: This value must
			be globally unique. It is recommended that it follow
			the RFC 822 addr-spec (i.e. localpart@domain). 
			Including the @domain half is a good way to ensure uniqueness.	

method			This property defines the iCalendar object method associated	PUBLISH
			with the calendar object. When used in a MIME message entity, 
			the value of this property MUST be the same as the Content-Type 
			"method" parameter value. If either the "METHOD" property or 
			the Content-Type "method" parameter is specified, then the other
			MUST also be specified.
	
recurrenceRule		A recurrence rule, commonly referred to as an RRULE,		FREQ=DAILY
			defines the repeat pattern or rule for to-dos,
			journal entries and events. If specified, 
			RRULE can be used to compute the recurrence set 
			(the complete set of recurrence instances in a
			calendar component). You can use a generator like this one
	
sequence		For sending an update for an event (with the same uid),		2
			defines the revision sequence number.
	
busyStatus		Used to specify busy status for Microsoft applications,		'BUSY' OR 'FREE' OR 'TENTATIVE' OR 'OOF'
			like Outlook. See Microsoft spec.	

created			Date-time representing event's creation date.			[2000, 1, 5, 10, 0] (January 5, 2000 GMT +00:00)
			Provide a date-time in UTC	

lastModified		Date-time representing date when event was last modified.	[2000, 1, 5, 10, 0] (January 5, 2000 GMT +00:00)
			Provide a date-time in UTC	

calName			Specifies the calendar (not event) name. 			'Example Calendar'
			Used by Apple iCal and Microsoft Outlook; 
			see Open Specification	