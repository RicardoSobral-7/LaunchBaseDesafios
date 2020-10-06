const Masks = {
    apply(input, func){
        setTimeout(function(){
            input.value = Masks[func](input.value);
        },1);
    },
    formatCPF(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1")
    },
    formatPercent(value) {
        let divide = 10000;
        const arr = value.split(",");
        if(arr[1]){
            const decimals = arr[1].split("%")[0].length;
            if(decimals > 2){
                divide = Math.pow(10, decimals +2);
            }
        }
        value = value.replace(/\D/g,"");
        return new Intl.NumberFormat("pt-BR", {
            style:"percent",
            minimumFractionDigits:2,
            maximumFractionDigits:4
        }).format(value/divide);
    }
}


