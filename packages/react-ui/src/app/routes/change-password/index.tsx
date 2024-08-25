import { ChangePasswordForm } from '@/features/authentication/components/change-password';
import { FullLogo } from '@/components/ui/full-logo';

const ChangePasswordPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <FullLogo />
      <ChangePasswordForm />
    </div>
  );
};

export { ChangePasswordPage };
