//datos de cliente login
export interface cliente{
    id_cli?: string;
    nom_cli?: string;
    apepat_cli?: string;
    apemat_cli?: string;
    dni_cli?: string;
    correo_cli?: string;
    fec_nacimiento_cli?: string;
    licencia_cli?: string;
    usuario_cli?: string;
    clave_cli?: string;
    estado_cli?: string;
}

//datos de cliente registro
export interface cliente_registro{
    nom_cli?: string;
    apepat_cli?: string;
    apemat_cli?: string;
    dni_cli?: string;
    correo_cli?: string;
    fec_nacimiento_cli?: string;
    licencia_cli?: string;
    usuario_cli?: string;
    clave_cli?: string;
}