<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel - ReactJS - Nifty 2.*</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        @includeif('backend.layouts._css_default')
        @includeif('backend.layouts._css')
        <script type="text/javascript">
            baseUrl = '{{ url("") }}';
            window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>

    </head>
    <body>
        <div id="container" class="effect aside-float aside-bright mainnav-lg">
            @includeif('backend.layouts._header')
            <div class="boxed">
                @includeif('backend.layouts._menu')
                <div id="content-container">
                    <div id="example">
                    </div>
                </div>
            </div>
            @includeif('backend.layouts._footer')
        </div>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        @includeif('backend.layouts._js_default')
        @includeif('backend.layouts._js')
    </body>
</html>
