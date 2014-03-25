/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.call(this);
  this.evidence$2$2 = null;
  this.elems$2 = null;
  this.capacity$2 = 0;
  this.size$2 = 0
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype = new ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder();
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef;
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.elems__p2__AO = (function() {
  return this.elems$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.elems$und$eq__p2__AO__V = (function(x$1) {
  this.elems$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.capacity__p2__I = (function() {
  return this.capacity$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.capacity$und$eq__p2__I__V = (function(x$1) {
  this.capacity$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.size__p2__I = (function() {
  return this.size$2
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.size$und$eq__p2__I__V = (function(x$1) {
  this.size$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.mkArray__p2__I__AO = (function(size) {
  var newelems = ScalaJS.asArrayOf.java_lang_Object(this.evidence$2$2.newArray__I__O(size), 1);
  if ((this.size__p2__I() > 0)) {
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__p2__AO(), 0, newelems, 0, this.size__p2__I())
  };
  return newelems
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.resize__p2__I__V = (function(size) {
  this.elems$und$eq__p2__AO__V(this.mkArray__p2__I__AO(size));
  this.capacity$und$eq__p2__I__V(size)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.sizeHint__I__V = (function(size) {
  if ((this.capacity__p2__I() < size)) {
    this.resize__p2__I__V(size)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.ensureSize__p2__I__V = (function(size) {
  if (((this.capacity__p2__I() < size) || (this.capacity__p2__I() === 0))) {
    if ((this.capacity__p2__I() === 0)) {
      var newsize = 16
    } else {
      var newsize = (this.capacity__p2__I() * 2)
    };
    while ((newsize < size)) {
      newsize = (newsize * 2)
    };
    this.resize__p2__I__V(newsize)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$$plus$eq__O__Lscala_collection_mutable_ArrayBuilder$ofRef = (function(elem) {
  this.ensureSize__p2__I__V((this.size__p2__I() + 1));
  this.elems__p2__AO().underlying[this.size__p2__I()] = elem;
  this.size$und$eq__p2__I__V((this.size__p2__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofRef = (function(xs) {
  var x1 = xs;
  if (ScalaJS.is.scala_collection_mutable_WrappedArray$ofRef(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_WrappedArray$ofRef(x1);
    this.ensureSize__p2__I__V((this.size__p2__I() + x2.length__I()));
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(x2.array__AO(), 0, this.elems__p2__AO(), this.size__p2__I(), x2.length__I());
    this.size$und$eq__p2__I__V((this.size__p2__I() + x2.length__I()));
    return this
  };
  return ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofRef(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.clear__V = (function() {
  this.size$und$eq__p2__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.result__AO = (function() {
  if (((this.capacity__p2__I() !== 0) && (this.capacity__p2__I() === this.size__p2__I()))) {
    return this.elems__p2__AO()
  } else {
    return this.mkArray__p2__I__AO(this.size__p2__I())
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofRef(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofRef(x1);
    return ((this.size__p2__I() === x2.size__p2__I()) && (this.elems__p2__AO() === x2.elems__p2__AO()))
  };
  return false
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.toString__T = (function() {
  return "ArrayBuilder.ofRef"
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.result__O = (function() {
  return this.result__AO()
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuilder$ofRef(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayBuilder$ofRef(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayBuilder$ofRef(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.init___Lscala_reflect_ClassTag = (function(evidence$2) {
  this.evidence$2$2 = evidence$2;
  ScalaJS.c.scala_collection_mutable_ArrayBuilder.prototype.init___.call(this);
  this.capacity$2 = 0;
  this.size$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuilder$ofRef.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuilder$ofRef)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuilder$ofRef = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuilder$ofRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuilder$ofRef")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuilder$ofRef)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuilder$ofRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuilder$ofRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuilder$ofRef;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofRef = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuilder$ofRef: 0
}, false, "scala.collection.mutable.ArrayBuilder$ofRef", ScalaJS.data.scala_collection_mutable_ArrayBuilder, {
  scala_collection_mutable_ArrayBuilder$ofRef: 1,
  scala_collection_mutable_ArrayBuilder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayBuilder$ofRef.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuilder$ofRef;
//@ sourceMappingURL=ArrayBuilder$ofRef.js.map
