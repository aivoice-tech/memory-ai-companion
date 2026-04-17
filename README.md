<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gary Seath | AI Voice Builder</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 40px;
            line-height: 1.7;
            color: #333;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 820px;
            margin: 0 auto;
            background: white;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        h1 {
            color: #0d6efd;
            font-size: 2.5em;
            margin-bottom: 8px;
        }
        .subtitle {
            color: #555;
            font-size: 1.25em;
            margin-bottom: 35px;
        }
        h2 {
            color: #222;
            border-bottom: 2px solid #0d6efd;
            padding-bottom: 12px;
            margin-top: 40px;
        }
        ul {
            line-height: 1.8;
        }
        .highlight {
            font-weight: 600;
            color: #0d6efd;
        }
        .contact {
            margin-top: 50px;
            padding-top: 25px;
            border-top: 1px solid #eee;
            font-size: 1.1em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Gary Seath</h1>
        <p class="subtitle">AI Voice Builder &amp; Hardware Engineer</p>

        <p>I design and build practical AI voice companions and real-time voice systems, with a strong focus on accessibility and real-world usability for elderly users.</p>

        <h2>Featured Project: Memory</h2>
        <p><strong>Memory</strong> is an AI voice companion designed specifically for elderly users. It includes:</p>
        <ul>
            <li>Real-time conversational AI powered by Gemini Live</li>
            <li>Persistent medication reminders with natural, patient dialogue</li>
            <li>Push-to-Talk (PTT) interface for clear and deliberate interaction</li>
            <li>Custom audio bridge with echo management</li>
            <li>Built from the ground up using ESP32 and I2S audio</li>
        </ul>

        <p class="highlight">I am currently seeking contract, freelance, or project-based opportunities in AI voice, conversational AI, and voice hardware integration either remotely (UK/US) or on-site/hybrid in Johannesburg.</p>

        <div class="contact">
            <strong>Contact:</strong><br>
            <a href="mailto:aivoicetech@proton.me">aivoicetech@proton.me</a><br>
            <a href="https://www.linkedin.com/in/gary-seath/" target="_blank">LinkedIn Profile</a><br>
            <a href="https://aivoice.technology" target="_blank">Portfolio</a>
        </div>
    </div>
</body>
</html>









# Memory - AI Voice Companion

A complete hardware + software voice companion built for elderly users, developed from the ground up.

## About the Project

**Memory** is a practical AI voice companion designed to support elderly users with daily routines, medication reminders, and natural conversation. 

It combines embedded hardware with real-time cloud AI to create a warm, patient, and reliable companion.

### Key Features

- Real-time bidirectional voice streaming using ESP32 + I2S
- Persistent medication reminder system with gentle, natural dialogue
- Push-to-Talk (PTT) interface for clear user input
- Custom Python bridge connecting ESP32 to Gemini Live (via AnveVoice)
- Echo handling and basic acoustic management
- Warm, elderly-friendly tone using Zephyr voice

### Technical Stack

- **Hardware**: ESP32 with I2S microphone and speaker
- **Firmware**: C++ with I2S audio handling and PTT support
- **Bridge**: Python (asyncio + WebSockets) for real-time audio streaming
- **AI**: Gemini Live 2.5 Flash (native audio) via AnveVoice
- **Audio Processing**: 24kHz → 16kHz resampling, gain control, VAD

### Current Status

Working prototype with:
- Stable audio streaming
- Functional medication reminder conversations
- PTT button support
- Basic echo mitigation

Actively working on improving sentence completion, response reliability, and overall conversation flow.

### Seeking Opportunities

I am currently seeking **contract, freelance, or project-based opportunities** in AI voice, conversational AI, and voice hardware integration — either **remotely (UK/US)** or **on-site/hybrid in Johannesburg**.

### Contact

- Email: aivoicetech@proton.me
- LinkedIn: https://www.linkedin.com/in/gary-seath/
- Location: Johannesburg, South Africa

---

Built with Grok | South Africa