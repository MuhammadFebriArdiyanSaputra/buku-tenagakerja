# Gunakan base image Laravel terbaru yang stabil
FROM bitnami/laravel:12

# Set working directory
WORKDIR /app

# Copy semua file ke dalam container
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies dan build Vite (React)
RUN npm install && npm run build

# Set permission agar Laravel bisa menulis ke storage
RUN chmod -R 775 storage bootstrap/cache

# Cache config, route, dan views
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# Expose port Laravel default
EXPOSE 8000

# Jalankan Laravel saat container start
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
