import deepl
import os
from dotenv import load_dotenv

class Translator:
    def __init__(self):
        # load .env variables
        script_dir = os.path.dirname(os.path.abspath(__file__))
        relative_path = '../../.env'
        env_path = os.path.join(script_dir, relative_path)
        load_dotenv(dotenv_path=env_path)
        
        auth_key = os.getenv('DEEPL_AUTH_KEY')
        self.translator = deepl.Translator(auth_key)

    def translate(self, text, target_language):
        result = self.translator.translate_text(text, target_lang=target_language)
        return result.text
