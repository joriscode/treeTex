/** @constructor */
ScalaJS.c.scala_Option = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Option.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Option.prototype.constructor = ScalaJS.c.scala_Option;
ScalaJS.c.scala_Option.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_Product$class__productIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Option.prototype.productPrefix__T = (function() {
  return ScalaJS.impls.scala_Product$class__productPrefix__Lscala_Product__T(this)
});
ScalaJS.c.scala_Option.prototype.isDefined__Z = (function() {
  return (!this.isEmpty__Z())
});
ScalaJS.c.scala_Option.prototype.getOrElse__Lscala_Function0__O = (function(default$2) {
  if (this.isEmpty__Z()) {
    return default$2.apply__O()
  } else {
    return this.get__O()
  }
});
ScalaJS.c.scala_Option.prototype.orNull__Lscala_Predef$$less$colon$less__O = (function(ev) {
  return this.getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(ev$1) {
    return (function() {
      return ev$1.apply__O__O(null)
    })
  })(ev)))
});
ScalaJS.c.scala_Option.prototype.map__Lscala_Function1__Lscala_Option = (function(f) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(f.apply__O__O(this.get__O()))
  }
});
ScalaJS.c.scala_Option.prototype.fold__Lscala_Function0__Lscala_Function1__O = (function(ifEmpty, f) {
  if (this.isEmpty__Z()) {
    return ifEmpty.apply__O()
  } else {
    return f.apply__O__O(this.get__O())
  }
});
ScalaJS.c.scala_Option.prototype.flatMap__Lscala_Function1__Lscala_Option = (function(f) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return ScalaJS.as.scala_Option(f.apply__O__O(this.get__O()))
  }
});
ScalaJS.c.scala_Option.prototype.flatten__Lscala_Predef$$less$colon$less__Lscala_Option = (function(ev) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return ScalaJS.as.scala_Option(ev.apply__O__O(this.get__O()))
  }
});
ScalaJS.c.scala_Option.prototype.filter__Lscala_Function1__Lscala_Option = (function(p) {
  if ((this.isEmpty__Z() || ScalaJS.uZ(p.apply__O__O(this.get__O())))) {
    return this
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_Option.prototype.filterNot__Lscala_Function1__Lscala_Option = (function(p) {
  if ((this.isEmpty__Z() || (!ScalaJS.uZ(p.apply__O__O(this.get__O()))))) {
    return this
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_Option.prototype.nonEmpty__Z = (function() {
  return this.isDefined__Z()
});
ScalaJS.c.scala_Option.prototype.withFilter__Lscala_Function1__Lscala_Option$WithFilter = (function(p) {
  return new ScalaJS.c.scala_Option$WithFilter().init___Lscala_Option__Lscala_Function1(this, p)
});
ScalaJS.c.scala_Option.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ((!this.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(this.get__O())))
});
ScalaJS.c.scala_Option.prototype.forall__Lscala_Function1__Z = (function(p) {
  return (this.isEmpty__Z() || ScalaJS.uZ(p.apply__O__O(this.get__O())))
});
ScalaJS.c.scala_Option.prototype.foreach__Lscala_Function1__V = (function(f) {
  if ((!this.isEmpty__Z())) {
    f.apply__O__O(this.get__O())
  }
});
ScalaJS.c.scala_Option.prototype.collect__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  if (((!this.isEmpty__Z()) && pf.isDefinedAt__O__Z(this.get__O()))) {
    return new ScalaJS.c.scala_Some().init___O(pf.apply__O__O(this.get__O()))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_Option.prototype.orElse__Lscala_Function0__Lscala_Option = (function(alternative) {
  if (this.isEmpty__Z()) {
    return ScalaJS.as.scala_Option(alternative.apply__O())
  } else {
    return this
  }
});
ScalaJS.c.scala_Option.prototype.iterator__Lscala_collection_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  } else {
    return ScalaJS.modules.scala_collection_Iterator().single__O__Lscala_collection_Iterator(this.get__O())
  }
});
ScalaJS.c.scala_Option.prototype.toList__Lscala_collection_immutable_List = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    return new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(this.get__O(), ScalaJS.modules.scala_collection_immutable_Nil())
  }
});
ScalaJS.c.scala_Option.prototype.toRight__Lscala_Function0__Lscala_util_Either = (function(left) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_package().Left__Lscala_util_Left$().apply__O__Lscala_util_Left(left.apply__O())
  } else {
    return ScalaJS.modules.scala_package().Right__Lscala_util_Right$().apply__O__Lscala_util_Right(this.get__O())
  }
});
ScalaJS.c.scala_Option.prototype.toLeft__Lscala_Function0__Lscala_util_Either = (function(right) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_package().Right__Lscala_util_Right$().apply__O__Lscala_util_Right(right.apply__O())
  } else {
    return ScalaJS.modules.scala_package().Left__Lscala_util_Left$().apply__O__Lscala_util_Left(this.get__O())
  }
});
ScalaJS.c.scala_Option.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_Option.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_Option.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Option.prototype.toLeft__Lscala_Function0__ = (function(right) {
  return this.toLeft__Lscala_Function0__Lscala_util_Either(right)
});
ScalaJS.c.scala_Option.prototype.toRight__Lscala_Function0__ = (function(left) {
  return this.toRight__Lscala_Function0__Lscala_util_Either(left)
});
ScalaJS.c.scala_Option.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_Option.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Option.prototype.orElse__Lscala_Function0__ = (function(alternative) {
  return this.orElse__Lscala_Function0__Lscala_Option(alternative)
});
ScalaJS.c.scala_Option.prototype.collect__Lscala_PartialFunction__ = (function(pf) {
  return this.collect__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_Option.prototype.foreach__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f))
});
ScalaJS.c.scala_Option.prototype.forall__Lscala_Function1__ = (function(p) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p))
});
ScalaJS.c.scala_Option.prototype.exists__Lscala_Function1__ = (function(p$2) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$2))
});
ScalaJS.c.scala_Option.prototype.withFilter__Lscala_Function1__ = (function(p$3) {
  return this.withFilter__Lscala_Function1__Lscala_Option$WithFilter(p$3)
});
ScalaJS.c.scala_Option.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_Option.prototype.filterNot__Lscala_Function1__ = (function(p$4) {
  return this.filterNot__Lscala_Function1__Lscala_Option(p$4)
});
ScalaJS.c.scala_Option.prototype.filter__Lscala_Function1__ = (function(p$5) {
  return this.filter__Lscala_Function1__Lscala_Option(p$5)
});
ScalaJS.c.scala_Option.prototype.flatten__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.flatten__Lscala_Predef$$less$colon$less__Lscala_Option(ev)
});
ScalaJS.c.scala_Option.prototype.flatMap__Lscala_Function1__ = (function(f$2) {
  return this.flatMap__Lscala_Function1__Lscala_Option(f$2)
});
ScalaJS.c.scala_Option.prototype.fold__Lscala_Function0__Lscala_Function1__ = (function(ifEmpty, f$3) {
  return this.fold__Lscala_Function0__Lscala_Function1__O(ifEmpty, f$3)
});
ScalaJS.c.scala_Option.prototype.map__Lscala_Function1__ = (function(f$4) {
  return this.map__Lscala_Function1__Lscala_Option(f$4)
});
ScalaJS.c.scala_Option.prototype.orNull__Lscala_Predef$$less$colon$less__ = (function(ev$2) {
  return this.orNull__Lscala_Predef$$less$colon$less__O(ev$2)
});
ScalaJS.c.scala_Option.prototype.getOrElse__Lscala_Function0__ = (function(default$2) {
  return this.getOrElse__Lscala_Function0__O(default$2)
});
ScalaJS.c.scala_Option.prototype.isDefined__ = (function() {
  return ScalaJS.bZ(this.isDefined__Z())
});
ScalaJS.c.scala_Option.prototype.get__ = (function() {
  return this.get__O()
});
ScalaJS.c.scala_Option.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_Option.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_Option.prototype.productElement__I__ = (function(n) {
  return this.productElement__I__O(n)
});
ScalaJS.c.scala_Option.prototype.canEqual__O__ = (function(that) {
  return ScalaJS.bZ(this.canEqual__O__Z(that))
});
/** @constructor */
ScalaJS.inheritable.scala_Option = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Option.prototype = ScalaJS.c.scala_Option.prototype;
ScalaJS.is.scala_Option = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Option)))
});
ScalaJS.as.scala_Option = (function(obj) {
  if ((ScalaJS.is.scala_Option(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Option")
  }
});
ScalaJS.isArrayOf.scala_Option = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Option)))
});
ScalaJS.asArrayOf.scala_Option = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Option(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Option;", depth)
  }
});
ScalaJS.data.scala_Option = new ScalaJS.ClassTypeData({
  scala_Option: 0
}, false, "scala.Option", ScalaJS.data.java_lang_Object, {
  scala_Option: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Option.prototype.$classData = ScalaJS.data.scala_Option;
//@ sourceMappingURL=Option.js.map
