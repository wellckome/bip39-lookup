@echo off
echo Atualizando repositório no GitHub...

git add .
git commit -m "Atualização automática"
git push origin main

echo.
echo ✅ Deploy concluído! O GitHub Pages vai atualizar em alguns minutos.
pause
