" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk

unmap <Space>

exmap splitVert :obcommand workspace:split-vertical
exmap splitHori :obcommand workspace:split-horizontal
nmap <Space>wv :splitVert
nmap <Space>wx :splitHori
