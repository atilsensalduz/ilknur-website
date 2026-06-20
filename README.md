# Klinik Psikolog İlknur Çetin — Web Sitesi

Jekyll tabanlı, GitHub Pages üzerinde yayınlanan kişisel psikolog sitesi.

## Yerel Geliştirme

```bash
# Ruby yolu (macOS Homebrew kurulumu için)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

# Bağımlılıkları kur (ilk seferinde)
bundle install

# Geliştirme sunucusunu başlat — http://localhost:4000
bundle exec jekyll serve --livereload
```

## Yeni Blog Yazısı Eklemek

`_posts/` klasörüne `YYYY-MM-DD-konu-basligi.md` formatında dosya oluşturun:

```markdown
---
layout: post
title: "Yazı Başlığı"
date: 2026-06-20
excerpt: "Yazının kısa özeti (blog listesi ve sosyal paylaşım için)."
tags: [kaygı, ilişkiler]
---

Yazı içeriği buraya...
```

Dosyayı `main` branch'e push ettiğinizde GitHub Actions otomatik olarak siteyi yayına alır.

## Site İçeriğini Güncellemek

| Dosya | Ne değiştirir |
|---|---|
| `pages/hakkimda.md` | Hakkımda sayfası |
| `pages/iletisim.md` | İletişim sayfası |
| `_config.yml` | Site başlığı, e-posta, telefon, sosyal medya linkleri |
| `assets/css/main.css` | Tasarım ve renkler |

## Deploy

Her `main` push'unda `.github/workflows/deploy.yml` otomatik çalışır:

1. Ruby 3.3 kurulur, gem'ler önbellekten yüklenir
2. `bundle exec jekyll build` çalışır
3. `_site/` klasörü GitHub Pages'e deploy edilir

Workflow durumunu GitHub → **Actions** sekmesinden takip edebilirsiniz.

## Domein Değiştirmek

1. `CNAME` dosyasının içeriğini yeni domain ile güncelleyin (örn. `psikologilknur.com`)
2. `_config.yml` içindeki `url:` satırını eşleşecek şekilde güncelleyin
3. DNS sağlayıcınızda GitHub Pages'e yönlendirme ayarlayın
