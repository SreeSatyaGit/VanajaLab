from PIL import Image
import os

# Directory containing the .png files
image = './images/Shabeer.png'
input_directory = "./images"
output_directory = './resizeImages'

# Create the output directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# Iterate over all files in the input directory
for filename in os.listdir(input_directory) or image:
    if filename.endswith('.png'):
        # Open an image file
        with Image.open(os.path.join(input_directory, filename)) as img:
            # Resize image
            resized_img = img.resize((3936, 3843))
            
            # Save resized image to the output directory
            resized_img.save(os.path.join(output_directory, filename))

print("All images have been resized and saved.")
