/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$;
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.thisCollection$extension__AS__Lscala_collection_mutable_WrappedArray = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort().init___AS($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.toCollection$extension__AS__AS__Lscala_collection_mutable_WrappedArray = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort().init___AS(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.newBuilder$extension__AS__Lscala_collection_mutable_ArrayBuilder$ofShort = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofShort().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.length$extension__AS__I = (function($$this) {
  return $$this.underlying.length
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.apply$extension__AS__I__S = (function($$this, index) {
  return $$this.underlying[index]
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.update$extension__AS__I__S__V = (function($$this, index, elem) {
  $$this.underlying[index] = elem
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.hashCode$extension__AS__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.equals$extension__AS__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_mutable_ArrayOps$ofShort(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ofShort$1 = null
    } else {
      var ofShort$1 = ScalaJS.as.scala_collection_mutable_ArrayOps$ofShort(x$1).repr__AS()
    };
    return ($$this === ofShort$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.equals$extension__AS__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__AS__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.hashCode$extension__AS__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__AS__I($$this$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.update$extension__AS__I__S__ = (function($$this$3, index, elem) {
  return ScalaJS.bV(this.update$extension__AS__I__S__V($$this$3, index, elem))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.apply$extension__AS__I__ = (function($$this$4, index$2) {
  return ScalaJS.bS(this.apply$extension__AS__I__S($$this$4, index$2))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.length$extension__AS__ = (function($$this$5) {
  return ScalaJS.bI(this.length$extension__AS__I($$this$5))
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.newBuilder$extension__AS__ = (function($$this$6) {
  return this.newBuilder$extension__AS__Lscala_collection_mutable_ArrayBuilder$ofShort($$this$6)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.toCollection$extension__AS__AS__ = (function($$this$7, repr) {
  return this.toCollection$extension__AS__AS__Lscala_collection_mutable_WrappedArray($$this$7, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.thisCollection$extension__AS__ = (function($$this$8) {
  return this.thisCollection$extension__AS__Lscala_collection_mutable_WrappedArray($$this$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofShort$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayOps$ofShort$.prototype = ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayOps$ofShort$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayOps$ofShort$)))
});
ScalaJS.as.scala_collection_mutable_ArrayOps$ofShort$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayOps$ofShort$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayOps$ofShort")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofShort$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayOps$ofShort$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayOps$ofShort$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayOps$ofShort$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayOps$ofShort;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayOps$ofShort$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayOps$ofShort$: 0
}, false, "scala.collection.mutable.ArrayOps$ofShort$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_ArrayOps$ofShort$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayOps$ofShort$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofShort = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayOps$ofShort = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofShort)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofShort = new ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayOps$ofShort
});
//@ sourceMappingURL=ArrayOps$ofShort$.js.map
