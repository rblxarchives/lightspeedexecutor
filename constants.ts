export const MOBILE_CONFIG_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>DNSSettings</key>
            <dict>
                <key>DNSProtocol</key>
                <string>HTTPS</string>
                <key>ServerURL</key>
                <string>https://dns.nextdns.io/7a84d1</string>
            </dict>
            <key>PayloadDescription</key>
            <string>Custom Guardian Block DNS (7a84d1) to prevent revokes.</string>
            <key>PayloadDisplayName</key>
            <string>Guardian Block (7a84d1)</string>
            <key>PayloadIdentifier</key>
            <string>com.guardian.block.7a84d1</string>
            <key>PayloadType</key>
            <string>com.apple.dnsSettings.managed</string>
            <key>PayloadUUID</key>
            <string>7a84d100-1234-5678-9abc-def012345678</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>Anti-Revoke & Anti-Blacklist</string>
    <key>PayloadDisplayName</key>
    <string>Guardian Block</string>
    <key>PayloadIdentifier</key>
    <string>com.guardian.block</string>
    <key>PayloadOrganization</key>
    <string>Guardian</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>11223344-5566-7788-9900-aabbccddeeff</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;