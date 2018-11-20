---
layout: blog
title: What is HTTPS and why is it important?
date: '2018-11-10T20:42:15+13:00'
thumbnail: /uploads/https.jpg
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
* ISP (Internet Service Providers) can intercept traffic and effectively perform MitM attacks
* All the exchanges between the Router, ISP and Web Server

What could the MitM do with this power? Well one scenario is 'Session Hijacking'. Back in the day when Facebook was not HTTPS, you could download a Firefox plugin called Firesheep, login to a WiFi network at say your local cafe and look at the packets of information being sent from the users of the network. You could then inspect these packets, and if someone was on Facebook you could take their authentication cookie and hijack their session. In simple terms, because the data wasn't secure a hacker could login as you!

# Three Important Aspects to HTTPS

## Confidentiality

This is the most common reason for using HTTPS. HTTPS helps to ensure the information being sent and received is private, such as your passwords when you login, messages and emails that you're reading and banking details when doing internet banking.

## Integrity

Integrity with HTTPS is concerned with ensuring the outgoing communication hasn't been tampered with. Imagine a pure content site delivering news articles. If the connection doesn't use HTTPS then malicious tracking or malware could be injected into the communication.

Another example would be a website that loads its login page over HTTP but does the postback of the password with HTTPS. This is a dangerous scenario where the login page could have malicious code injected such as a keystroke logger. Even though the password is sent securely, the keystrokes would be recorded!

## Authenticity

This is about trust. Knowing that the website you are visiting is what it says it is.

DNS hijacking is an example of authenticity being breached. When you type in a domain name e.g. google.com this easy to remember name is mapped to a corresponding IP address something like _139.130.4.5._ When a DNS is hijacked the user would think they have been sent to the correct address when they have actually been sent somewhere different. 

Hijacking can be done in a couple of different ways; either at the users end by infecting a computer or router with trojan attack software or at the website end actually taking over the websites DNS so that it points to somewhere else.

With HTTP you would have no warning that authenticity is being breached, but with HTTPS you would receive a warning like the following:

![HTTPS: Wrong host warning ](/uploads/privacy-error.jpg)

# HTTPS - Just Enforce It!

If you host a website or are a developer you should definitely be using and enforcing HTTPS for your sites. It's cheap, not difficult to set-up and won't effect response speed. 

Furthermore browsers will love you for it... or perhaps even more importantly, if you don't use HTTPS, browsers will tell your users that your site isn't secure. 

Browsers are also starting to remove features for non-secure sites and allowing your site to use new technology such as service workers.

In my next post we'll dive deeper in HTTPS.
