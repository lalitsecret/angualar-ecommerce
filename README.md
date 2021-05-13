npm install -g mongoose cors body-parser express express-fileupload jsonwebtoken 

ng g c pages/home --skipTests=true
ng g c pages/login --skipTests=true
ng g c pages/signup --skipTests=true
ng g c pages/cart --skipTests=true
ng g c pages/orders --skipTests=true
ng g c pages/checkout --skipTests=true
ng g c pages/logout --skipTests=true
ng g c pages/profile --skipTests=true
ng g c pages/details --skipTests=true
ng g c common/components/left --skipTests=true
ng g c common/components/right --skipTests=true
ng g c common/components/products --skipTests=true
ng g c common/components/item --skipTests=true
ng g c common/components/filters --skipTests=true
ng g c common/components/rating --skipTests=true

ng g d directives/tbl --skipTests=true
ng g p pipes/search --skipTests=true
ng g p pipes/sort --skipTests=true
ng g p pipes/col --skipTests=true
ng g p pipes/tagname --skipTests=true


ng g s services/my --skipTests=true
ng g s services/auth --skipTests=true
ng g s services/guard --skipTests=true

