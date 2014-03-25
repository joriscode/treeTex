/** @constructor */
ScalaJS.c.scala_collection_concurrent_CNode$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_concurrent_CNode$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_CNode$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_CNode$;
ScalaJS.c.scala_collection_concurrent_CNode$.prototype.dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode = (function(x, xhc, y, yhc, lev$3, gen$5) {
  if ((lev$3 < 35)) {
    var xidx = ((xhc >>> lev$3) & 31);
    var yidx = ((yhc >>> lev$3) & 31);
    var bmp = ((1 << xidx) | (1 << yidx));
    if ((xidx === yidx)) {
      var subinode = new ScalaJS.c.scala_collection_concurrent_INode().init___Lscala_collection_concurrent_Gen(gen$5);
      subinode.mainnode$f = this.dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(x, xhc, y, yhc, (lev$3 + 5), gen$5);
      return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(bmp, ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [subinode]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_concurrent_BasicNode.getClassOf())), 1), gen$5)
    } else {
      if ((xidx < yidx)) {
        return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(bmp, ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [x, y]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_concurrent_BasicNode.getClassOf())), 1), gen$5)
      } else {
        return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(bmp, ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [y, x]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_concurrent_BasicNode.getClassOf())), 1), gen$5)
      }
    }
  } else {
    return new ScalaJS.c.scala_collection_concurrent_LNode().init___O__O__O__O(x.k__O(), x.v__O(), y.k__O(), y.v__O())
  }
});
ScalaJS.c.scala_collection_concurrent_CNode$.prototype.dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__ = (function(x, xhc, y, yhc, lev, gen) {
  return this.dual__Lscala_collection_concurrent_SNode__I__Lscala_collection_concurrent_SNode__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(x, xhc, y, yhc, lev, gen)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_CNode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_CNode$.prototype = ScalaJS.c.scala_collection_concurrent_CNode$.prototype;
ScalaJS.is.scala_collection_concurrent_CNode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_CNode$)))
});
ScalaJS.as.scala_collection_concurrent_CNode$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_CNode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.CNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_CNode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_CNode$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_CNode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_CNode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.CNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_CNode$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_CNode$: 0
}, false, "scala.collection.concurrent.CNode$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_CNode$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_CNode$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_CNode$;
ScalaJS.moduleInstances.scala_collection_concurrent_CNode = undefined;
ScalaJS.modules.scala_collection_concurrent_CNode = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_CNode)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_CNode = new ScalaJS.c.scala_collection_concurrent_CNode$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_CNode
});
//@ sourceMappingURL=CNode$.js.map
