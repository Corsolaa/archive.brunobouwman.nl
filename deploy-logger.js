fetch('version.json')
    .then(response => {
        if (!response.ok) throw new Error('version.json not found on this server');
        return response.json();
    })
    .then(data => {
        console.log('%c🚀 LOCAL DEPLOY INFO', 'background: #007bff;color: white;padding: 4px 8px;border-radius: 4px;font-weight: bold');
        console.log('Version:     ', data.version || 'Not found...');
        console.log('Commit:      ', data.commit || 'Not found...');
        console.log('Build date:  ', data.date || 'Not found...');
        console.log('Environment: ', data.environment || 'Not found...');
    })
    .catch(err => console.log('Notice: No version.json found on this domain.'));