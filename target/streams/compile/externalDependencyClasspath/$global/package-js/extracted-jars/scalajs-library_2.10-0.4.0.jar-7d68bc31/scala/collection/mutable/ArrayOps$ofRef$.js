/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.thisCollection$extension__AO__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.toCollection$extension__AO__AO__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.newBuilder$extension__AO__Lscala_collection_mutable_ArrayBuilder$ofRef = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef().init___Lscala_reflect_ClassTag(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.objectGetClass($$this))))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.length$extension__AO__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.apply$extension__AO__I__O = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.update$extension__AO__I__O__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.hashCode$extension__AO__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.equals$extension__AO__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofRef(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofRef$1 = null
    } else {
      var ofRef$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofRef(x$1).repr__AO()
    };
    return ($$this === ofRef$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.equals$extension__AO__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AO__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.hashCode$extension__AO__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AO__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.update$extension__AO__I__O__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AO__I__O__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.apply$extension__AO__I__ = (function($$this$4, index$2) {
  return this.apply$extension__AO__I__O($$this$4, index$2)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.length$extension__AO__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AO__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.newBuilder$extension__AO__ = (function($$this$6) {
  return this.newBuilder$extension__AO__Lscala_collection_mutable_ArrayBuilder$ofRef($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.toCollection$extension__AO__AO__ = (function($$this$7, repr) {
  return this.toCollection$extension__AO__AO__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.thisCollection$extension__AO__ = (function($$this$8) {
  return this.thisCollection$extension__AO__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofRef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofRef$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofRef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofRef$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofRef$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofRef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofRef")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofRef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofRef$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofRef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofRef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofRef;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofRef$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofRef$: 0
}, false, "scala.collection.mutable.ArrayOps$ofRef$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofRef$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofRef$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofRef = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofRef = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofRef)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofRef = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofRef
});
//@ sourceMappingURL=ArrayOps$ofRef$.js.map
