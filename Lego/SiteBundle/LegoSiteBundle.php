<?php

namespace Lego\SiteBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class LegoSiteBundle extends Bundle
{
    public function getParent()
    {
        return 'MainSiteBundle';
    }
}
