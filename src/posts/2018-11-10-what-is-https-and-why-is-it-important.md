---
layout: blog
title: What is HTTPS and why is it important?
date: '2018-11-10T20:42:15+13:00'
thumbnail: /uploads/image.jpg
rating: '1'
---
# What is HTTPS?

HTTP is the protocol used for sending data between your browser and the website that you are connected to. Hyper Text Transfer Protocol Secure (HTTPS) is the secure version of the HTTP protocol.

Web browsers typically display a padlock icon in the address bar to visually indicate that a HTTPS connection is being used.

# Why is HTTPS important?

## Stopping Man-in-the-Middle-Attacks

A Man-in-the-Middle Attack (MitM) is an attack where the attacker secretly sits between two parties, for example someone's web browser and the website that they are viewing. The MitM reads, relays and possibly alters the communication between the two parties. These parties believe they are communicating directly, but they are not.

There are a few common insertion points for MitM attacks; places in the communication network where a Man-in-the-Middle can sit.

* WiFi routers. For example an unencrypted public WiFi hot-spot
* ISP (Internet Service Providers) who intercept traffic and effectively perform MitM attacks
* All the exchanges between the Router, ISP and Web Server

What could the MitM do with this power? Well one scenario is 'Session Hijacking'. Back in the day when Facebook was not HTTPS, you could download a Firefox plugin called Firesheep, login to a WiFi network at say your local cafe and look at the packets of information being sent from the users of the network. You could then inspect these packets, and if someone was on Facebook you could take their authentication cookie and hijack their session. In simple terms because the data wasn't secure a hacker could login as you!

Three aspects:

Confidentiality

Integrity

Authenticity



Security researcher Scott Helme's post on status of HTTPS: https://scotthelme.co.uk/alexa-top-1-million-analysis-august-2018/
