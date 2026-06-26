"use client";

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #fee2e2, #ffffff, #fed7aa)',
          padding: '1rem'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            padding: '2rem',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 2rem',
              background: 'linear-gradient(to right, #ef4444, #f97316)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertTriangle style={{ width: '40px', height: '40px', color: 'white' }} />
            </div>
            
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Critical Error
            </h1>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              marginBottom: '2rem'
            }}>
              A critical error occurred. Please try refreshing the page.
            </p>
            
            <button
              onClick={reset}
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(to right, #2563eb, #9333ea)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <RefreshCw style={{ width: '20px', height: '20px' }} />
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
