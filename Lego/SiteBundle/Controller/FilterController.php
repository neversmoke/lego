<?php

namespace Lego\SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Itc\AdminBundle\Tools\LanguageHelper;
use Itc\AdminBundle\Tools\ControllerHelper;

/**
 * News controller.
 * Routing registered in routing.yml
 */
class FilterController extends ControllerHelper {

    protected $age = 'ItcAdminBundle:Template\AttributeResource';
    protected $group = 'ItcAdminBundle:Product\ProductGroup';

        public function getProductsTemplate(){
        
        $em = $this->getDoctrine()->getEntityManager();
        
        $entity=$em->getRepository('ItcAdminBundle:Product\ProductAttribute')
                       ->createQueryBuilder('P')
                       ->select('P, R.name')
                       ->InnerJoin('ItcAdminBundle:Template\AttributeResource', 
                               'R', 'WITH', 'P.attribute_resource_id=R.id')
                       ->getQuery()
                       ->execute();
        
        return $entity;
    }
    /**
     * @Template()
     */
    public function FilterBlockAction() {
        
        $em = $this->getDoctrine()->getManager();

        $colection_age = $em->getRepository($this->age)->findAll();

        return array(
            'form' => $this->createFilterForm()->createView(),
            'age'  => $colection_age
        );
    }

    /**
     * @Route("/filter",  name="accept_filter")
     * @Template()
     */
    public function FilterPageAction(Request $request) {
        $mass="";
        $request=$request->request->all();
        
        $group_id=$request['collection_group'];
        
        $from_price = $request['from_price'];
        $to_price = $request['to_price'];
        if (isset($request['colection_age'])){
        $colection_age = $request['colection_age'];
        }
        else{
            $colection_age="";
        }
        if(is_array($colection_age))
            foreach ($colection_age as $id) {
                $mass.=$id.",";
            }
        
        $em = $this->getDoctrine()->getManager();
        
        $product = 
                $em->getRepository('ItcAdminBundle:Product\Product')
                       ->createQueryBuilder('P')
                       ->select('P');
                       if(substr($mass, 0, -1)!="")
                       $product->InnerJoin('ItcAdminBundle:Product\ProductAttribute',
                               'R', 'WITH', 'P.id=R.product')
                       ->where("R.attribute_resource_id in (".substr($mass, 0, -1).")");
                       if($group_id!="")
                       $product->AndWhere("P.productGroupId=:group_id")
                               ->setParameter("group_id", $group_id);
                       if($to_price !="")
                           $product->AndWhere("P.price <= :to")
                                   ->setParameter("to", $to_price);
                       if($from_price !="")
                           $product->AndWhere("P.price >= :from")
                                   ->setParameter("from", $from_price);
        $product=$product->getQuery()->execute();
        $atributs = $this->getProductsTemplate();
        return array(
            'entities' =>$product,
            'atributs' => $atributs
        );
    }

    private function createFilterForm() {
        return $this->get('form.factory')->createNamedBuilder(null, 'form', 
                array("from_price" => "", "to_price" => "","collection_group" => ""))
                        ->add('from_price', 'text', array('required'=>false))
                        ->add('to_price', 'text', array('required'=>false))
                        ->add('collection_group', 'entity', array(
                            'class' => $this->group,
                            'empty_value' => '',
                            'required'=>false
                        ))
                        ->getForm();
    }

}
