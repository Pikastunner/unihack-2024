from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Authenticate with OAuth2
creds = Credentials.from_authorized_user_file('path/to/credentials.json')

# Build the Drive service
drive_service = build('drive', 'v3', credentials=creds)

# File path of the .pptx file you want to upload and convert
file_path = 'path/to/your/presentation.pptx'
file_metadata = {
    'name': 'Your Presentation Name', # Name of the file in Google Drive
    'mimeType': 'application/vnd.google-apps.presentation'
}
media = MediaFileUpload(file_path,
                        mimetype='application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        resumable=True)

# Upload the file
file = drive_service.files().create(body=file_metadata,
                                    media_body=media,
                                    fields='id').execute()

print('File ID:', file.get('id'))