import React from 'react';
import { IconButton, Divider, Tooltip } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { Supplier, Contact } from '@/types';
import { formatPhoneNumber } from '@/utils';
import { CustomModal } from '@/components';
import Text from '@/components/Text/styles';
import { ContainerContact, ContainerSection } from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
  supplier: Supplier | null;
}

const SupplierDetailsModal: React.FC<Props> = ({ open, onClose, supplier }) => {
  if (!supplier) return null;
  const address: string = `${supplier.street}, ${supplier.number}, ${supplier.city} - ${supplier.state}, ${supplier.cep}`;

  const handleOpenWhatsApp = (phone: string) => {
    const formattedPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${formattedPhone}`, '_blank');
  };

  return (
    <CustomModal open={open} onClose={onClose} title={'Detalhes do Fornecedor'}>
      <ContainerSection>
        <Text variant="caption">{supplier.name}</Text>
        <Text variant="description">{supplier.description}</Text>
        <Divider sx={{ marginBottom: 0 }} />

        <ContainerSection>
          <Text variant="caption">Contatos</Text>
          {supplier.contacts.map((contact: Contact, i: number) => (
            <ContainerContact key={i}>
              <Text variant="description">
                {contact.nameContact} - {formatPhoneNumber(contact.phone)}
              </Text>
              <Tooltip title="Abrir no WhatsApp">
                <IconButton
                  onClick={() => handleOpenWhatsApp(contact.phone)}
                  size="small"
                  color="success"
                >
                  <WhatsApp />
                </IconButton>
              </Tooltip>
            </ContainerContact>
          ))}
        </ContainerSection>
        <Divider sx={{ marginBottom: 0 }} />

        <Text variant="caption">Endereço</Text>
        <Text variant="description">{address}</Text>
      </ContainerSection>
      <div>
        <iframe
          style={{ borderRadius: '0.5rem' }}
          title="Google Maps"
          width="100%"
          height="300"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBRzOMzhmqcpXMalkBxATCTvU5BXP-CL6U&q=${encodeURIComponent(
            address,
          )}`}
        />
      </div>
    </CustomModal>
  );
};

export default SupplierDetailsModal;
