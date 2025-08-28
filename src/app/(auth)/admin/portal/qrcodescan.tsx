'use client';

import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

type QrScannerProps = {
    onScanSuccess: (decodedText: string, decodedResult: any) => void;
};

export default function QrScanner({ onScanSuccess }: QrScannerProps) {
    const scannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scannerRef.current) return;

        const scanner = new Html5QrcodeScanner(
            'reader',
            { fps: 10, qrbox: 250 },
            false 
        );

        scanner.render(
            onScanSuccess,
            (err) => {
                console.warn('Scan error', err);
            }
        );

        return () => {
            scanner.clear().catch((error) => console.error('Failed to clear scanner', error));
        };
    }, [onScanSuccess]);

    return <div id="reader" ref={scannerRef}></div>;
}
