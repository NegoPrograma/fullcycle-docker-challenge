FROM golang AS Compiler

WORKDIR /usr/src/go 

COPY . .

RUN go build hello.go

FROM scratch

WORKDIR /usr/src/go 

COPY --from=Compiler /usr/src/go/hello /usr/src/go/hello

CMD [ "./hello" ]