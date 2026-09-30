import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const downloadsDir = path.resolve('public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Generate simple mock archive structure
const apkReadme = `TripZ Android Package (APK) - Version 1.2.0 (Build 108)
Package: com.tripz.mobility.app
Architecture: universal (arm64-v8a, armeabi-v7a, x86_64)
Min SDK: Android 8.0 (API 26)
Target SDK: Android 14 (API 34)

Features in this build:
- Live GPS telemetry bus tracking
- Interactive seat selection with double-decker support
- Multi-currency payment integration (Khmer Riel, USD, Thai Baht)
- Offline digital boarding pass QR codes
- Push notifications for departure gates and delays

(This is a verified portfolio test distribution build)`;

const checksums = `SHA-256 Checksums for TripZ v1.2.0 Release Builds:
0822c1d8081b530e57d46c652fbf45d661ddd087969c54c598443f39fbd13ba3  TripZ-v1.2.0.apk (61.4 MB)
Generated on: 2026-09-30 | TripZ Release Engineering
`;

fs.writeFileSync(path.join(downloadsDir, 'checksums.txt'), checksums);

console.log('Download files created successfully in public/downloads');
